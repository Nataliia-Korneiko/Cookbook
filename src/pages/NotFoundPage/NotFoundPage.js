import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes/routes';
import dish from '../../assets/img/decoration/dish.png';
import s from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={s.wrapper}>
      <main className={s.main}>
        <h2 className={s.error__title}>
          Sorry, the page you requested was not found.
        </h2>
        <p className={s.error__subtitle}>
          This is our homepage:{' '}
          <NavLink to={routes.HOME} className={s.error__link}>
            Home
          </NavLink>
        </p>
        <div className={s.error}>
          <p className={s.error__number}>4</p>
          <img src={dish} alt="dish" className={s.error__dish} width="500" />
          <p className={s.error__number}>4</p>
        </div>
      </main>
    </div>
  );
};

export default NotFoundPage;
