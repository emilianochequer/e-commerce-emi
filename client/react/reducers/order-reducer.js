import { ORDER_DETAILS } from '../constants';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ORDER_DETAILS:
      return action.order;
    default:
      return state;
  }
};
