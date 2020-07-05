import { LOGIN_USER, LOGOUT_USER, GET_USER } from '../constants';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return Object.assign({}, state, action.user);
    case LOGOUT_USER:
      return Object.assign({});
      case GET_USER:
      return action.user;
    default:
      return state;
  }
};
