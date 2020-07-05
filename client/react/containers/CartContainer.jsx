import React from 'react';
import store from '../store';
import { connect } from 'react-redux';
import { changeAmountInDB, changeStatus } from '../action-creator/cart';
import Cart from '../components/Cart';

function mapStateToProps(state, ownProps) {
  return {
    cart: state.cart,
    user: state.user,
    history: ownProps.history,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    changeAmount: function(e, index, orderId, userId, product) {
      dispatch(changeAmountInDB(e, index, orderId, userId, product));
    },
    changeStatus: function(orderId, status) {
      dispatch(changeStatus(orderId, status));
      ownProps.history.push('/cart/end');
    },
  };
}

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart);

export default CartContainer;
