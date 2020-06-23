import React from 'react';
import { reduxForm, Field } from 'redux-form';

const TimelineForm = (props) => (
  <form onSubmit={props.handleSubmit}>
    <Field
      component={'input'}
      name={'post'}
      placeholder={'Add new post'}
    />
    <button>Add</button>
  </form>
);

export default reduxForm({
  form: 'post',
})(TimelineForm);
