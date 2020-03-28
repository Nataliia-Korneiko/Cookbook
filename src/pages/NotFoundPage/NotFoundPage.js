import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes/routes';
import dish from '../../assets/dish-01.png';
import s from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={s.wrapper}>
      <main className={s.main}>
        <h2 className={s.main__title}>
          Sorry, the page you requested was not found.
        </h2>
        <p className={s.main__subtitle}>
          This is our homepage: <NavLink to={routes.HOME}>Home</NavLink>
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
