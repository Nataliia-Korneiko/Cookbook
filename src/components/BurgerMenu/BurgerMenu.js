import React from 'react';
// import { Link, NavLink } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import routes from '../../routes/routes';

import s from './BurgerMenu.module.css';

const BurgerMenu = () => {
  return (
    <div className={s.menu__wrap}>
      {/* <div> */}
      <input type="checkbox" className={s.toggle} />
      <div className={s.hamburger}>
        <div />
      </div>
      <div className={s.menu}>
        <div>
          <div>
            <ul>
              <li>
                <NavLink exact to={routes.HOME}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to={routes.ABOUT}>About</NavLink>
              </li>
              <li>
                <NavLink to={routes.MY_RECIPES}>My Recipes</NavLink>
              </li>
              <li>
                <NavLink to={routes.LOG_IN}>Log In</NavLink>
              </li>
              <li>
                <NavLink to={routes.SIGN_UP}>Sign Up</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
