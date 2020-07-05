import axios from 'axios';
import { GET_USERS, DELETE_USER, UPDATE_USER, GET_ORDER } from '../constants';

export function getUsers(users) {
  return {
    type: GET_USERS,
    users,
  };
}
export function deleteUserAction(userId) {
  return {
    type: DELETE_USER,
    userId,
  };
}
export function updateUserAction(user) {
  return {
    type: UPDATE_USER,
    user,
  };
}
//quiero traer las ordenes de los usuarios
export function getUserOrder(orders) {
  return {
    type: GET_ORDER,
    orders,
  };
}

export const fetchUsers = () => dispatch =>
  axios
    .get('/api/users')
    .then(res => res.data)
    .then(users => dispatch(getUsers(users)));

export const deleteUser = id => dispatch =>
  axios
    .delete(`/api/users/${id}`)
    .then(res => res.data)
    .then(user => dispatch(deleteUserAction(id)));

export const makeAdmin = id => dispatch =>
  axios
    .put(`/api/users/${id}`, { rol: 'admin' })
    .then(res => res.data)
    .then(user => dispatch(updateUserAction(user)));

export const showUsersOrders = id => dispatch =>
  axios
    .get(`/api/orders/${id}/users`)
    .then(res => res.data)
    .then(orders => {
      dispatch(getUserOrder(orders));
    });
