import React from 'react';
import classes from './RegisterFormBlock.module.scss';
import Rocket from '../../../assets/LoginPage/Rocket.png';
import RegisterForm from './RegisterForm/RegisterForm';

const RegisterFormBlock = () => {
  const onSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <div className={classes.wrapper}>
      <div className={classes.box}>
        <img className={classes.image} src={Rocket} alt="" />
        <p className={classes.header}>Create your Account!</p>
        <RegisterForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};
export default RegisterFormBlock;
