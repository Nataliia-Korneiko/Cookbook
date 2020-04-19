import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import shortid from 'shortid';
import routes from '../../routes/routes';
import LinkGoogle from '../LinkGoogle/LinkGoogle';
import Button from '../ButtonAuthorization/ButtonAuthorization';
import s from './SignUpForm.module.css';

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

  render() {
    const { name, email, password, error } = this.state;
    return (
      <div className={s.wrapper}>
        <LinkGoogle />
        <form
          className={s.form}
          onSubmit={this.handleSubmit}
          autoComplete="off"
        >
          <label className={s.label} htmlFor={this.ids.nameId}>
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
          <label className={s.label} htmlFor={this.ids.emailId}>
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
          <label className={s.label} htmlFor={this.ids.passwordId}>
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
