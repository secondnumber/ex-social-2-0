import React from 'react';
import classes from './Form.module.scss';

export const Form = ({ input, meta, child, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div
      className={classes.formControl + ' ' + (hasError ? classes.error : '')}
    >
      {props.children}
      {hasError && <span className={classes.error}>{meta.error}</span>}
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
