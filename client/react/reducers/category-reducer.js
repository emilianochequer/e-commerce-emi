import { EDIT_CATEGORY, GET_CATEGORY } from '../constants';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case EDIT_CATEGORY:
      return Object.assign({}, state, action.category);
    case GET_CATEGORY:
      return Object.assign({}, state, action.category);
    default:
      return state;
  }
};
