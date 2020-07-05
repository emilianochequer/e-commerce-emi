import { GET_USERS, DELETE_USER, UPDATE_USER, GET_ORDER } from '../constants';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return action.users.slice();
    case DELETE_USER:
      let newUsers = state.slice();
      return newUsers.filter(user => user.id !== action.userId);
    case UPDATE_USER:
      let newUsers2 = state.slice();
      const index = newUsers2.findIndex(user => user.id === action.user.id);
      newUsers2[index] = action.user;
      return newUsers2;
    default:
      return state;
  }
};
