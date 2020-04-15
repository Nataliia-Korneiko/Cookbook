import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes/routes';
import s from './BurgerMenu.module.css';

const BurgerMenu = () => {
  return (
    <>
      <input type="checkbox" className={s.toggle} />
      <div className={s.hamburger}>
        <div />
      </div>
      <div className={s.menu}>
        <div>
          <div>
            <ul className={s.list}>
              <li className={s.item}>
                <NavLink
                  exact
                  to={routes.HOME}
                  className={s.link}
                  activeClassName={s.active__link}
                >
                  Home
                </NavLink>
              </li>
              <li className={s.item}>
                <NavLink
                  to={routes.ABOUT}
                  className={s.link}
                  activeClassName={s.active__link}
                >
                  About
                </NavLink>
              </li>
              <li className={s.item}>
                <NavLink
                  to={routes.MY_RECIPES}
                  className={s.link}
                  activeClassName={s.active__link}
                >
                  My Recipes
                </NavLink>
              </li>
              <li className={s.item}>
                <NavLink
                  to={routes.LOG_IN}
                  className={s.link}
                  activeClassName={s.active__link}
                >
                  Log In
                </NavLink>
              </li>
              <li className={s.item}>
                <NavLink
                  to={routes.SIGN_UP}
                  className={s.link}
                  activeClassName={s.active__link}
                >
                  Sign Up
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
