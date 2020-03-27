import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes/routes';
import zero from '../../assets/zero-02.png';
import s from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={s.wrapper}>
      <main className={`${s.main} ${s.container}`}>
        <div className={s.image}>
          <p className={s.title}>4</p>
          <img src={zero} alt="zero" className={s.zero} width="1100" />
          <p className={s.title}>4</p>
        </div>
        <h2 className={s.text}>Sorry, the page you requested was not found.</h2>
        <p>
          This is our homepage: <NavLink to={routes.HOME}>Click me!</NavLink>
        </p>
      </main>
    </div>
  );
};

export default NotFoundPage;
