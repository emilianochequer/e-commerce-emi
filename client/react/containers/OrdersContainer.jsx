import React from 'react';
import store from '../store';
import { connect } from 'react-redux';
import OrdersComponents from '../components/OrdersComponents';
import { changeStatus } from '../action-creator/cart';

function mapStateToProps(state, ownProps) {
  return {
    orders: state.allorders,
    states: ['Uncreated', 'Created', 'Inprocess', 'Canceled', 'Completed'],
    selectedStatus: '',
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    changeState: function(orderId, status, index) {
      dispatch(changeStatus(orderId, status, index));
    },
  };
}

const OrdersContainer = connect(mapStateToProps, mapDispatchToProps)(
  OrdersComponents,
);

export default OrdersContainer;
