import React from 'react';
import classes from './LoginForm.module.scss';
import { reduxForm, Field } from 'redux-form';
import {
  maxLengthCreator,
  required,
} from '../../../../utils/validators/validators';
import { Input } from '../../../common/FormsControls/Form';

const maxLength30 = maxLengthCreator(30);

const LoginForm = (props) => (
  <form onSubmit={props.handleSubmit} className={classes.form}>
    <Field
      component={Input}
      name={'email'}
      type={'text'}
      placeholder={'Email'}
      validate={[required, maxLength30]}
    />
    <Field
      component={Input}
      name={'password'}
      type={'password'}
      placeholder={'Password'}
      validate={[required, maxLength30]}
    />
    {props.error && (
      <div className={classes.formSummaryError}>{props.error}</div>
    )}
    {!props.error && <div className={classes.formFreePlace}></div>}
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
      <li>
        <a>Facebook</a>
      </li>
      <li>
        <a>Twitter</a>
      </li>
      <li>
        <a>Google</a>
      </li>
      <li>
        <a>Youtube</a>
      </li>
    </ul>
  </form>
);

export default reduxForm({
  form: 'login',
})(LoginForm);
