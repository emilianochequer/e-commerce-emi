import axios from 'axios';
import { GET_USER } from '../constants';
import store from '../store';

export const getUser = user => ({ type: GET_USER, user });

// trae la orden de la base de da
export const fetchUser = () => dispatch =>
  axios
    .get('/api/me')
    .then(res => res.data)
    .then(user => dispatch(getUser(user)));
