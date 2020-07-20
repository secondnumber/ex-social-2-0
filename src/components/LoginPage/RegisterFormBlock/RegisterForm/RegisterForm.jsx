import React from 'react';
import classes from './RegisterForm.module.scss';
import { reduxForm, Field } from 'redux-form';
import {
  maxLengthCreator,
  required,
} from '../../../../utils/validators/validators';
import { createField, Input } from '../../../common/FormsControls/Form';

const maxLength30 = maxLengthCreator(30);

const RegisterForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit} className={classes.form}>
    {createField(Input, 'email', 'text', 'Email', [required, maxLength30])}
    {createField(Input, 'username', 'text', 'Username', [
      required,
      maxLength30,
    ])}
    {createField(Input, 'password', 'password', 'Password', [
      required,
      maxLength30,
    ])}
    {createField(Input, 'repeatPassword', 'password', 'Repeat Password', [
      required,
      maxLength30,
    ])}
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
