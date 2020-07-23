import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import classes from './LoginPage.module.scss';
import LoginIntro from './LoginIntro/LoginIntro';
import LoginFormBlock from './LoginFormBlock/LoginFormBlock';
import RegisterFormBlock from './RegisterFormBlock/RegisterFormBlock';

const LoginPage = ({ isAuth }) => {
  if (isAuth) {
    return (
      <Switch>
        <Redirect to={{ pathname: '/timeline' }} />
      </Switch>
    );
  }
  return (
    <Switch>
      <div className={classes.wrapper}>
        <LoginIntro />
        <Route exact path="/register">
          <RegisterFormBlock />
        </Route>
        <Route exact path="/">
          <LoginFormBlock />
        </Route>
        <Route exact path="/login">
          <LoginFormBlock />
        </Route>
      </div>
    </Switch>
  );
};

export default LoginPage;
