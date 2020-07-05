import axios from 'axios';
import { GET_PRODUCTS_CATEGORY } from '../constants';
import { ADD_REVIEW, GET_REVIEWS } from '../constants';

export const addReview = review => {
  return {
    type: ADD_REVIEW,
    review,
  };
};

export const getReviews = reviews => {
  return {
    type: GET_REVIEWS,
    reviews,
  };
};

export const setReview = (productId, review) => dispatch => {
  axios
    .post(`/api/reviews/${productId}`, review)
    .then(res => res.data)
    .then(newReview => {
      dispatch(addReview(newReview));
    })
    .catch(err => console.log(err));
};

export const fetchReviews = productId => dispatch => {
  axios
    .get(`/api/reviews/${productId}`)
    .then(res => res.data)
    .then(reviews => {
      dispatch(getReviews(reviews));
    })
    .catch(err => console.log(err));
};
