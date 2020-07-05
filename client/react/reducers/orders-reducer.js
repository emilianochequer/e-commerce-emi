import { GET_ORDER, ORDER_DETAILS } from '../constants';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER:
      return action.orders;
    case ORDER_DETAILS:
      return action.order;
    default:
      return state;
  }
};
