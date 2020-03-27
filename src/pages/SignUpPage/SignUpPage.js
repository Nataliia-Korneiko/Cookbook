import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import s from './SignUpPage.module.css';

const SignUpPage = () => {
  return (
    <div className={s.wrapper}>
      <Header />
      <main className={`${s.main} ${s.container}`} />
      <Footer />
    </div>
  );
};

export default SignUpPage;
