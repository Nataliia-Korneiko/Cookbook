import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import s from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={s.wrapper}>
      <Header />
      <main className={`${s.main} ${s.container}`}>
        <div className={s.quote}>
          <p className={s.quote__description}>
            &#34; It is important to experiment and endlessly seek after
            creating the best possible flavours when preparing foods. That means
            not being afraid to experiment with various ingredients.&#34;
          </p>
          <p className={s.quote__author}>Rocco DiSpirito</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
