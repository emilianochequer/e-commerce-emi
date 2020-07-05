import axios from 'axios';
import { ORDER_DETAILS } from '../constants';
import OrderDetails from '../components/OrderDetails';

export function getOrderDetails(order) {
  return {
    type: ORDER_DETAILS,
    order,
  };
}

export const fetchSearchOrderDetail = id => dispatch =>
  axios
    .get(`/api/orders/${id}/details`)
    .then(res => res.data)
    .then(orderDetails => dispatch(getOrderDetails(orderDetails)));
