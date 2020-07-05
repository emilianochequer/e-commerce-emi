import { GET_CATEGORIES, DELETE_CATEGORY } from '../constants';
import { ADD_CATEGORY } from '../constants';
import { EDIT_CATEGORY } from '../constants';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return action.categories;
    case ADD_CATEGORY:
      return state.slice().concat(action.category);
    case EDIT_CATEGORY:
      const newState = state.slice();
      const index = newState.findIndex(
        category => category.id === action.category.id,
      );
      newState[index] = action.category;
      return newState;
    case DELETE_CATEGORY:
      function remove(elem) {
        return elem.id != action.id;
      }
      return state.filter(remove);
    default:
      return state;
  }
};
