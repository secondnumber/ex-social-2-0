import React from 'react';
import classes from './LoginForm.module.scss';
import { reduxForm, Field } from 'redux-form';

const LoginForm = (props) => (
  <form onSubmit={props.handleSubmit}>
    <Field
      component={'input'}
      name={'login'}
      type="text"
      placeholder={'Username or Email'}
    />
    <Field
      component={'input'}
      name={'password'}
      type="password"
      placeholder={'Password'}
    />
    <label>
      <Field component={'input'} name={'rememberMe'} type="checkbox" />
      Remember Me
    </label>
    <p className={classes.forgot}>
      <a>Forgot Password?</a>
    </p>
    <button className={classes.button}>Login to your Account!</button>
    <p>Login with your Social Account</p>
    <ul className={classes.socialList}>
      <li className={classes.socialItem}>
        <a>Facebook</a>
      </li>
      <li className={classes.socialItem}>
        <a>Twitter</a>
      </li>
      <li className={classes.socialItem}>
        <a>Google</a>
      </li>
      <li className={classes.socialItem}>
        <a>Youtube</a>
      </li>
    </ul>
  </form>
);

export default reduxForm({
  form: 'login',
})(LoginForm);
