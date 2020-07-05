import { ADD_REVIEW } from '../constants';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_REVIEW:
      return Object.assign({}, state, action.review);
    default:
      return state;
  }
};
