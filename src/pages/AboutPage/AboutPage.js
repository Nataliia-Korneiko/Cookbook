import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import s from './AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={s.wrapper}>
      <Header />
      <main className={`${s.main} ${s.container}`} />
      {/* <img src={paper} alt="zero" className={s.zero} width="700" /> */}
      <Footer />
    </div>
  );
};

export default AboutPage;
