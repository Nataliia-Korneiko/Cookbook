import React from 'react';
import { ReactComponent as IconGoogle } from '../../assets/icons/icon-google.svg';
import s from './LinkGoogle.module.css';

const LinkGoogle = () => {
  return (
    <a className={s.link__google} href="https://www.google.com.ua/">
      <div className={s.link__wrapper}>
        <IconGoogle width="28" height="28" />
        <span className={s.link__span}>Google</span>
      </div>
    </a>
  );
};

export default LinkGoogle;
