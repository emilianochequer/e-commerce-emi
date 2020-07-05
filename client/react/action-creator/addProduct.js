import axios from 'axios';
import { ADD_PRODUCT } from '../constants';

export const addProduct = product => {
  return {
    type: ADD_PRODUCT,
    product,
  };
};

export const fetchAddProduct = product => dispatch => {
  console.log('entraaaaa');
  axios
    .post(`/api/products`, product)
    .then(res => res.data)
    .then(newProduct => {
      dispatch(addProduct(newProduct));
    });
};
