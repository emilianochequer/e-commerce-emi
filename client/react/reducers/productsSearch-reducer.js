import { GET_SEARCH_PRODUCTS } from '../constants';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH_PRODUCTS:
      return action.products;
    default:
      return state;
  }
};
