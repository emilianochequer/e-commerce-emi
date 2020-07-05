import axios from 'axios';
import { GET_RATING } from '../constants';

export const getRating = rating => {
  return {
    type: GET_RATING,
    rating,
  };
};

export const fetchRating = id => dispatch =>
  axios
    .get(`/api/products/${id}`)
    .then(res => res.data.reviews)
    .then(reviews => {
      dispatch(getRating(reviews));
    });
