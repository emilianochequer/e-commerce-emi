import React from 'react';
import { Link } from 'react-router-dom';
import './UserProfile.css';

export default props => (
  <div id="profile">
    <h3>Account Info</h3>
    <ul>
      <li className="list-group-item justify-content-between">
        <strong>Name</strong>
        <span>{props.user.name}</span>
      </li>
      <li className="list-group-item justify-content-between">
        <strong> Last Name</strong> <span>{props.user.lastname}</span>
      </li>
      <li className="list-group-item justify-content-between">
        <strong>Email</strong> <span>{props.user.email}</span>
      </li>
      <li className="list-group-item justify-content-between">
        <strong> User Name</strong> <span>{props.user.username}</span>
      </li>
      <li className="list-group-item justify-content-between">
        <strong> Password </strong> <span>{props.user.password}</span>
      </li>
    </ul>
  </div>
);
