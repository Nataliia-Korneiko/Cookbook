import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import routes from '../../routes/routes';
import logo from '../../assets/img/logo.png';
import { ReactComponent as Burger } from '../../assets/icon/icon-burger.svg';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <>
      <nav className={`${s.navigation} ${s.container}`}>
        <Link to={routes.HOME} className={s.logo__link}>
          <img src={logo} alt="logo" className={s.logo} width="289" />
        </Link>

        <ul className={s.navigation__list}>
          <li>
            <NavLink exact to={routes.HOME} className={s.navigation__link}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={routes.ABOUT} className={s.navigation__link}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to={routes.MY_RECIPES} className={s.navigation__link}>
              My Recipes
            </NavLink>
          </li>
          <li>
            <NavLink to={routes.LOG_IN} className={s.navigation__link}>
              Log In
            </NavLink>
          </li>
          <li>
            <NavLink to={routes.SIGN_UP} className={s.navigation__link}>
              Sign Up
            </NavLink>
          </li>
        </ul>
        <button type="button" className={s.navigation__button}>
          <Burger />
        </button>
      </nav>
    </>
  );
};

export default Navigation;
