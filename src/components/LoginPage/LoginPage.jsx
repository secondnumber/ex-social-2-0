import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import classes from './LoginPage.module.scss';
import LoginIntro from './LoginIntro/LoginIntro';
import LoginForm from './LoginForm/LoginForm';
import RegisterForm from './RegisterForm/RegisterForm';

const LoginPage = () => (
  <Router>
    <div className={classes.wrapper}>
      <LoginIntro />
      <Route path="/register">
        <RegisterForm />
      </Route>
      <Route path="/login">
        <LoginForm />
      </Route>
    </div>
  </Router>
);

export default LoginPage;
