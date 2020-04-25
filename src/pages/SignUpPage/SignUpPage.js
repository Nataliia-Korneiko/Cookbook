import React from 'react';
import Header from '../../components/Header/Header';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import Footer from '../../components/Footer/Footer';
import s from './SignUpPage.module.css';

const SignUpPage = () => {
  return (
    <div className={s.wrapper}>
      <Header />
      <main className={`${s.main} ${s.container}`}>
        <p className={s.main__title}>This page is under construction</p>
        <SignUpForm />
      </main>
      <Footer />
    </div>
  );
};

export default SignUpPage;
