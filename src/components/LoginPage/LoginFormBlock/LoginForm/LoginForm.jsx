import React from 'react';
import classes from './LoginForm.module.scss';
import { reduxForm, Field } from 'redux-form';
import {
  maxLengthCreator,
  required,
} from '../../../../utils/validators/validators';
import { createField, Input } from '../../../common/FormsControls/Form';

const maxLength30 = maxLengthCreator(30);

const LoginForm = ({ handleSubmit, error, captchaUrl }) => (
  <form onSubmit={handleSubmit} className={classes.form}>
    {createField(Input, 'email', 'text', 'Email', [required, maxLength30])}
    {createField(Input, 'password', 'password', 'Password', [
      required,
      maxLength30,
    ])}
    {error && <div className={classes.formSummaryError}>{error}</div>}
    {!error && <div className={classes.formFreePlace}></div>}
    <label>
      <Field component={'input'} name={'rememberMe'} type="checkbox" />
      Remember Me
    </label>
    <p className={classes.forgot}>
      <a href={'#'}>Forgot Password?</a>
    </p>
    {captchaUrl && <img src={captchaUrl} />}
    {captchaUrl && createField(Input, 'captcha', 'text', 'Captcha', [required])}
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
