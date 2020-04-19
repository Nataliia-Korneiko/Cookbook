import React from 'react';
import Header from '../../components/Header/Header';
import LogInForm from '../../components/LogInForm/LogInForm';
import Footer from '../../components/Footer/Footer';
import s from './LogInPage.module.css';

const LogInPage = () => {
  return (
    <div className={s.wrapper}>
      <Header />
      <main className={`${s.main} ${s.container}`}>
        <p className={s.main__title}>
          Sorry, this page is under construction...
        </p>
        <LogInForm />
      </main>
      <Footer />
    </div>
  );
};

export default LogInPage;
