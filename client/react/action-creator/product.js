import axios from 'axios';
import { GET_PRODUCT, ADD_PRODUCT, EDIT_PRODUCT } from '../constants';

export const addProduct = product => {
  return {
    type: ADD_PRODUCT,
    product,
  };
};

export const editProduct = product => {
  return {
    type: EDIT_PRODUCT,
    product,
  };
};

export const getProduct = product => {
  return {
    type: GET_PRODUCT,
    product,
  };
};




export const fetchAddProduct = product => dispatch => {
  axios
    .post(`/api/products`, product)
    .then(res => res.data)
    .then(newProduct => {
      console.log('new', newProduct);
      dispatch(addProduct(newProduct));
    });
};

export const updateProduct = (product, id) => dispatch => {
  axios
    .put(`/api/products/${id}`, product)
    .then(res => {
      return res.data;
    })
    .then(editedProduct => {
      dispatch(editProduct(editedProduct));
    });
};

export const fetchProduct = id => dispatch =>
  axios
    .get(`/api/products/${id}`)
    .then(res => res.data)
    .then(product => {
      dispatch(getProduct(product));
    });
