import React from 'react';
import classes from './LoginFormBlock.module.scss';
import Rocket from '../../../assets/LoginPage/Rocket.png';
import LoginForm from './LoginForm/LoginForm';
import { connect } from 'react-redux';
import { login } from '../../../redux/reducers/authReducer';
import { Redirect, Switch, withRouter } from 'react-router-dom';

const LoginFormBlock = ({ login, auth, isAuth, captchaUrl }) => {
  const onSubmit = (formData) => {
    login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };

  if (isAuth) {
    return (
      <Switch>
        <Redirect to={{ pathname: '/timeline' }} />
      </Switch>
    );
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.box}>
        <img className={classes.image} src={Rocket} alt="" />
        <p className={classes.header}>Account Login</p>
        <LoginForm onSubmit={onSubmit} auth={auth} captchaUrl={captchaUrl} />
      </div>
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
  };
};

export default withRouter(connect(mapStateToProps, { login })(LoginFormBlock));
