import { GET_REVIEWS } from '../constants';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_REVIEWS:
      return action.reviews;
    default:
      return state;
  }
};
