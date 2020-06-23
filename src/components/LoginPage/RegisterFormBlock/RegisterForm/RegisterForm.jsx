import React from 'react';
import classes from './RegisterForm.module.scss';
import { reduxForm, Field } from 'redux-form';

const RegisterForm = (props) => (
  <form onSubmit={props.handleSubmit}>
    <Field
      component={'input'}
      name={'email'}
      type="text"
      placeholder={'Email'}
    />
    <Field
      component={'input'}
      name={'username'}
      type="text"
      placeholder={'Username'}
    />
    <Field
      component={'input'}
      name={'password'}
      type="password"
      placeholder={'Password'}
    />
    <Field
      component={'input'}
      name={'repeatPassword'}
      type="password"
      placeholder={'Repeat Password'}
    />
    <label htmlFor="send">
      <Field component={'input'} name={'subscribe'} type="checkbox" id="send" className={classes.send} />
      Send me news and updates via email
    </label>
    <button className={classes.login}>Register Now!</button>
    <p>
      You ll receive a confirmation email in your inbox with a link to activate
      your account. If you have any problems,
      <a href="#">contact us!</a>
    </p>
  </form>
);

export default reduxForm({
  form: 'register',
})(RegisterForm);
