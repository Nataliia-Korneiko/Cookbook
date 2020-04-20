import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import shortid from 'shortid';
import { validateAll } from 'indicative/validator';
import routes from '../../routes/routes';
import LinkGoogle from '../LinkGoogle/LinkGoogle';
import Button from '../ButtonAuthorization/ButtonAuthorization';
import s from './SignUpForm.module.css';

const validationRules = {
  name: 'required|min:2|max:20',
  email: 'required|email',
  password: 'required|min:6|max:12',
};

const validationMessages = {
  'name.required': 'This field is required!',
  'name.min': 'Name must be at least 2 characters!',
  'name.max': 'Name must be no more than 20 characters!',
  'email.required': 'This field is required!',
  'email.email': 'Enter a valid email address!',
  'password.required': 'This field is required!',
  'password.min': 'Password must be at least 6 characters!',
  'password.max': 'Password must be no more than 12 characters!',
};

class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    error: null,
  };

  ids = {
    nameId: shortid.generate(),
    emailId: shortid.generate(),
    passwordId: shortid.generate(),
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, email, password } = this.state;

    validateAll({ name, email, password }, validationRules, validationMessages)
      .then(() => {
        this.setState({ name: '', email: '', password: '', error: null });
      })
      .catch(errors => {
        const formatedErrors = {};
        errors.forEach(error => {
          formatedErrors[error.field] = error.message;
        });
        this.setState({
          error: formatedErrors,
        });
      });
  };

  render() {
    const { name, email, password, error } = this.state;
    return (
      <div className={s.wrapper}>
        <LinkGoogle />
        <form
          className={s.form}
          onSubmit={this.handleSubmit}
          autoComplete="off"
          noValidate
        >
          <label
            className={`${s.label} ${s.label__name}`}
            htmlFor={this.ids.nameId}
          >
            Name&#58;
            <input
              className={s.input}
              id={this.ids.nameId}
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              placeholder="Enter your name"
            />
            {error && <span className={s.error}>{error.name}</span>}
          </label>
          <label
            className={`${s.label} ${s.label__email}`}
            htmlFor={this.ids.emailId}
          >
            E-mail&#58;
            <input
              className={s.input}
              id={this.ids.emailId}
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              placeholder="Enter your email"
            />
            {error && <span className={s.error}>{error.email}</span>}
          </label>
          <label
            className={`${s.label} ${s.label__password}`}
            htmlFor={this.ids.passwordId}
          >
            Password&#58;
            <input
              className={s.input}
              id={this.ids.passwordId}
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              placeholder="Enter your password"
            />
            {error && <span className={s.error}>{error.password}</span>}
          </label>
          <Button label="Sign Up" type="submit" />
          <p className={s.relink}>Already have an account?</p>
          <NavLink to={routes.LOG_IN} className={s.link}>
            Log In
          </NavLink>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
