import React from 'react';
import classes from './Form.module.scss';
import { Field } from 'redux-form';

export const Form = ({ meta: { touched, error }, children }) => {
  const hasError = touched && error;
  return (
    <div
      className={classes.formControl + ' ' + (hasError ? classes.error : '')}
    >
      {children}
      {hasError && <span className={classes.error}>{error}</span>}
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <Form {...props}>
      <textarea {...input} {...restProps} />
    </Form>
  );
};

export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <Form {...props}>
      <input {...input} {...restProps} />
    </Form>
  );
};

export const createField = (component, name, type, placeholder, validate) => (
  <>
    <Field
      component={component}
      name={name}
      type={type}
      placeholder={placeholder}
      validate={validate}
    />
  </>
);
