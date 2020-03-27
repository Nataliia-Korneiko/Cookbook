import React from 'react';
import s from './Footer.module.css';

const Footer = () => {
  return (
    <>
      <footer className={s.footer}>
        <div className={s.container}>
          <p className={s.footer__title}>
            &#169; CookBook&#44; 2020 &#8226; All Rights Reserved &#8226; Design
            by Nataliia Korneiko
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
