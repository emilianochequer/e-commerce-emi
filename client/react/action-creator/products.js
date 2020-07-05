import axios from 'axios';
import { GET_PRODUCTS, DEL_PRODUCT, GET_SEARCH_PRODUCTS } from '../constants';

export function getProducts(products) {
  return {
    type: GET_PRODUCTS,
    products,
  };
}
export function getSearchProducts(products) {
  return {
    type: GET_SEARCH_PRODUCTS,
    products,
  };
}

export const fetchProducts = category => dispatch => {
  const url = `/api/products${category ? `?category=${category}` : ''}`;
  return axios
    .get(url)
    .then(res => res.data)
    .then(products => dispatch(getProducts(products)));
};

export const fetchSearchProducts = () => dispatch =>
  axios
    .get('/api/products')
    .then(res => res.data)
    .then(products => dispatch(getSearchProducts(products)));

export const delProduct = id => {
  return {
    type: DEL_PRODUCT,
    id,
  };
};

export const deleteProduct = id => dispatch => {
  axios.delete(`/api/products/${id}`).then(() => dispatch(delProduct(id)));
};
