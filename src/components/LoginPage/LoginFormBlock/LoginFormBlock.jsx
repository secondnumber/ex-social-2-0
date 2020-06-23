import React from 'react';
import classes from './LoginFormBlock.module.scss';
import Rocket from '../../../assets/LoginPage/Rocket.png';
import LoginForm from './LoginForm/LoginForm';

const LoginFormBlock = () => {
  const onSubmit = (formData) => {
    console.log(formData);
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
export default LoginFormBlock;
