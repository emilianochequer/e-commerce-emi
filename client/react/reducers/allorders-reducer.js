import { ALL_ORDERS, CHANGE_STATUS } from '../constants';

const initialState = {
  states: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ALL_ORDERS:
      return action.allorders;
    case CHANGE_STATUS:
      const prod = state.allorders.slice();
      const st = Object.assign({}, state, { states: prod });
      st.allorders[action.index].status = action.value;
      return st;
    default:
      return state;
  }
};
