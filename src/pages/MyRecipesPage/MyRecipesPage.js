import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MainContainer from '../../containers/MainContainer/MainContainer';
import s from './MyRecipesPage.module.css';

const MyRecipesPage = () => {
  return (
    <div className={s.wrapper}>
      <Header />
      <main className={`${s.main} ${s.container}`}>
        <MainContainer />
      </main>
      <Footer />
    </div>
  );
};

export default MyRecipesPage;
