import { GET_PRODUCT } from '../constants';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return Object.assign({}, action.product);
    default:
      return state;
  }
};
