import { GET_RATING } from '../constants';

const initialState = 0;

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_RATING:
      let rating = 0;
      action.rating.forEach(res => {
        rating += res.star;
      });
      return rating / action.rating.length;
    default:
      return state;
  }
};
