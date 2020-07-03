import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import classes from './LoginPage.module.scss';
import LoginIntro from './LoginIntro/LoginIntro';
import LoginFormBlock from './LoginFormBlock/LoginFormBlock';
import RegisterFormBlock from './RegisterFormBlock/RegisterFormBlock';

const LoginPage = () => (
  <Router>
    <div className={classes.wrapper}>
      <LoginIntro />
      <Route exact path="/register">
        <RegisterFormBlock />
      </Route>
      <Route exact path="/login">
        <LoginFormBlock />
      </Route>
      <Route exact path="/">
        <LoginFormBlock />
      </Route>
    </div>
  </Router>
);

export default LoginPage;
