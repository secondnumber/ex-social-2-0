import React from 'react';
import classes from './RegisterForm.module.scss';
import { reduxForm, Field } from 'redux-form';
import {
  maxLengthCreator,
  required,
} from '../../../../utils/validators/validators';
import { Input } from '../../../common/FormsControls/Form';

const maxLength10 = maxLengthCreator(10);

const RegisterForm = (props) => (
  <form onSubmit={props.handleSubmit} className={classes.form}>
    <Field
      component={Input}
      name={'email'}
      type={'text'}
      placeholder={'Email'}
      validate={[required, maxLength10]}
    />
    <Field
      component={Input}
      name={'username'}
      type={'text'}
      placeholder={'Username'}
      validate={[required, maxLength10]}
    />
    <Field
      component={Input}
      name={'password'}
      type={'password'}
      placeholder={'Password'}
      validate={[required, maxLength10]}
    />
    <Field
      component={Input}
      name={'repeatPassword'}
      type={'password'}
      placeholder={'Repeat Password'}
      validate={[required, maxLength10]}
    />
    <label htmlFor="send">
      <Field
        component={'input'}
        name={'subscribe'}
        type={'checkbox'}
        id="send"
        className={classes.send}
      />
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
