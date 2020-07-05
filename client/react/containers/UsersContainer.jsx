import React from 'react';
import store from '../store';
import Users from '../components/Users';
import { connect } from 'react-redux';
import { deleteUser, makeAdmin } from '../action-creator/users';
import { hideModal } from '../utils';

const mapStateToProps = state => {
  return { user: state.user, users: state.users };
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    onDelete: (userId, e) => {
      hideModal();
      dispatch(deleteUser(userId));
    },
    onMakeAdmin: userId => {
      hideModal();
      dispatch(makeAdmin(userId));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
