// import { ADD_PRODUCT, EDIT_PRODUCT } from '../constants';

// const initialState = {
//   products: [],
// };

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_PRODUCT:
//       return Object.assign({}, state, {
//         products: state.products.concat(action.product),
//       });
//     case EDIT_PRODUCT:
//       const index = state.products.findIndex(
//         product => product.id === action.product,
//       );
//       return Object.assign({}, state, {
//         product: state.products.index,
//       });
//     default:
//       return state;
//   }
// };
