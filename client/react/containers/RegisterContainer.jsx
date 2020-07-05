import React, { Component } from 'react';
import Register from '../components/Register';
import axios from 'axios';

class RegisterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordConfirm: '',
      validForm: false,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    const element = event.target;
    const form = element.parentElement;

    if (element.name === 'passwordConfirm') {
      const password = element.previousSibling.previousSibling.value;
      if (password !== element.value) {
        element.setCustomValidity('Passwords do not match');
      } else {
        element.setCustomValidity('');
      }
    }

    this.setState({
      [element.name]: element.value,
      validForm: form.checkValidity(),
    });

    if (element.validity.valid) {
      element.classList.add('is-valid');
      element.classList.remove('is-invalid');
    } else {
      element.classList.remove('is-valid');
      element.classList.add('is-invalid');
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const data = Object.assign({}, this.state);
    delete data.validForm;
    delete data.passwordConfirm;
    axios
      .post('/api/users', data)
      .then(response => response.data)
      .then(user => {
        this.props.history.push('/login');
      });
  }

  render() {
    return (
      <Register
        onChange={this.onChange}
        state={this.state}
        onSubmit={this.onSubmit}
      />
    );
  }
}

export default RegisterContainer;
