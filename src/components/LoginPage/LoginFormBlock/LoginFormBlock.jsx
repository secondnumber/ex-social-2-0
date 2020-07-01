import React from 'react';
import classes from './LoginFormBlock.module.scss';
import Rocket from '../../../assets/LoginPage/Rocket.png';
import LoginForm from './LoginForm/LoginForm';
import { connect } from 'react-redux';
import { login } from '../../../redux/reducers/authReducer';

const LoginFormBlock = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };
  return (
    <div className={classes.wrapper}>
      <div className={classes.box}>
        <img className={classes.image} src={Rocket} alt="" />
        <p className={classes.header}>Account Login</p>
        <LoginForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};
export default connect(null, { login })(LoginFormBlock);
