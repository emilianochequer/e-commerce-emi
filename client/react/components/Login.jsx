import React from 'react';
import { Link } from 'react-router-dom';
import './UserForms.css';

export default ({ onChange, state, onSubmit }) => {
  return (
    <div className="text-center auth-form mx-auto">
      <form className="form-signin" onSubmit={onSubmit}>
        <h1 className="h3 mb-3 font-weight-normal">Login</h1>
        <label htmlFor="inputEmail" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="inputEmail"
          name="email"
          className="form-control"
          placeholder="Email address"
          required
          onChange={onChange}
        />
        <label htmlFor="inputPassword" className="sr-only">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          name="password"
          className="form-control"
          placeholder="Password"
          required
          onChange={onChange}
        />
        <p className="text-danger mt-3">{state.error}</p>
        <button
          className="btn btn-lg btn-primary btn-block mb-3"
          type="submit"
          disabled={!state.validForm}
        >
          Login
        </button>
        <div className="text-left social-buttons">
          <div className="float-left">
            <a
              href="/auth/facebook"
              className="btn btn-sm btn-social btn-facebook mt-5"
            >
              <i className="fa fa-facebook" />Sign in with Facebook
            </a>
          </div>
          <div className="float-right">
            <a
              href="/auth/google"
              className="btn btn-sm btn-social btn-google mt-5"
            >
              <i className="fa fa-google" />Sign in with Google
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};
