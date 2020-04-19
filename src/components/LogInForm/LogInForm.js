import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import shortid from 'shortid';
import routes from '../../routes/routes';
import LinkGoogle from '../LinkGoogle/LinkGoogle';
import Button from '../ButtonAuthorization/ButtonAuthorization';
import s from './LogInForm.module.css';

class LogInForm extends Component {
  state = {
    email: '',
    password: '',
    error: null,
  };

  ids = {
    emailId: shortid.generate(),
    passwordId: shortid.generate(),
  };

  render() {
    const { email, password, error } = this.state;
    return (
      <div className={s.login}>
        <LinkGoogle />
        <form
          className={s.form}
          onSubmit={this.handleSubmit}
          autoComplete="off"
        >
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
          <Button label="Log in" type="submit" />
          <p className={s.relink}>Don&#39;t have an account?</p>
          <NavLink to={routes.SIGN_UP} className={s.link}>
            Sign Up
          </NavLink>
        </form>
      </div>
    );
  }
}

export default LogInForm;
