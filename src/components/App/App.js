import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../../routes/routes';
import HomePage from '../../pages/HomePage/HomePage';
import AboutPage from '../../pages/AboutPage/AboutPage';
import MyRecipesPage from '../../pages/MyRecipesPage/MyRecipesPage';
import LogInPage from '../../pages/LogInPage/LogInPage';
import SignUpPage from '../../pages/SignUpPage/SignUpPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

const App = () => {
  return (
    <Switch>
      <Route path={routes.HOME} exact component={HomePage} />
      <Route path={routes.ABOUT} component={AboutPage} />
      <Route path={routes.MY_RECIPES} component={MyRecipesPage} />
      <Route path={routes.LOG_IN} component={LogInPage} />
      <Route path={routes.SIGN_UP} component={SignUpPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
};

export default App;
