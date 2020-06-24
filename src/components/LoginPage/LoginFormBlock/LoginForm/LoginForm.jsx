import React from 'react';
import classes from './LoginForm.module.scss';
import { reduxForm, Field } from 'redux-form';
import {
  maxLengthCreator,
  required,
} from '../../../../utils/validators/validators';
import { Input } from '../../../common/FormsControls/Form';

const maxLength10 = maxLengthCreator(10);

const LoginForm = (props) => (
  <form onSubmit={props.handleSubmit} className={classes.form}>
    <Field
      component={Input}
      name={'login'}
      type={'text'}
      placeholder={'Username or Email'}
      validate={[required, maxLength10]}
    />
    <Field
      component={Input}
      name={'password'}
      type={'password'}
      placeholder={'Password'}
      validate={[required, maxLength10]}
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
