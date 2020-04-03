import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import s from './AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={s.wrapper}>
      <Header />
      <main className={s.main}>
        <div className={s.about}>
          <p className={s.about__title}>
            Cookbook is your personal recipe organizer. Save your favorite
            recipes in one place, accessible on all your devices and anytime.
            You can also delete or edit previously created recipes.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
