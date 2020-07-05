import axios from 'axios';
import { GET_PRODUCTS_CATEGORY } from '../constants';
import {
  GET_CATEGORIES,
  ADD_CATEGORY,
  EDIT_CATEGORY,
  GET_CATEGORY,
  DELETE_CATEGORY,
} from '../constants';

export const addCategory = category => {
  return {
    type: ADD_CATEGORY,
    category,
  };
};

export const getProductsCategory = products => {
  return {
    type: GET_PRODUCTS_CATEGORY,
    products,
  };
};

export const deleteCategory = id => {
  return {
    type: DELETE_CATEGORY,
    id,
  };
};

export const getCategories = categories => {
  return {
    type: GET_CATEGORIES,
    categories,
  };
};

export const getCategory = category => {
  return {
    type: GET_CATEGORY,
    category,
  };
};

export const editCategory = category => {
  return {
    type: EDIT_CATEGORY,
    category,
  };
};

export const fetchProductsCategory = id => dispatch =>
  axios
    .get(`/api/categories/${id}`)
    .then(res => res.data)
    .then(products => {
      console.log(products);
      dispatch(getProductsCategory(products));
    });

export const fetchCategories = () => dispatch =>
  axios
    .get('/api/categories')
    .then(res => res.data)
    .then(categories => {
      dispatch(getCategories(categories));
    });

export const fetchAddCategory = category => dispatch => {
  axios
    .post('/api/categories', category)
    .then(res => res.data)
    .then(newCategory => {
      dispatch(addCategory(newCategory));
    });
};

export const updateCategory = (id, category) => dispatch => {
  axios
    .put(`/api/categories/${id}`, category)
    .then(res => res.data)
    .then(category => {
      dispatch(editCategory(category));
    })
    .catch(err => console.log(err));
};

export const fetchCategory = id => dispatch => {
  axios
    .get(`/api/categories/${id}`)
    .then(res => res.data)
    .then(category => {
      dispatch(getCategory(category));
    });
};

export const removeCategory = id => dispatch => {
  axios
    .delete(`/api/categories/${id}`)
    .then(res => {
      dispatch(deleteCategory(id));
    })
    .catch(err => console.log(err));
};
