import React, { useState } from 'react';
import classes from './ProfileContact.module.scss';
import { createField, Input } from '../../common/FormsControls/Form';
import { maxLengthCreator } from '../../../utils/validators/validators';
import { reduxForm } from 'redux-form';

const maxLength30 = maxLengthCreator(30);

const ProfileContact = ({ handleSubmit, isOwner, profile }) => {
  const [editMode, setEditMode] = useState(false);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    handleSubmit();
    setEditMode(false);
  };

  const contactsForm = Object.keys(profile.contacts).map((key) => {
    return (
      <li className={classes.item}>
        {key}:{' '}
        {createField(Input, 'contacts.' + key, 'text', key, [
          maxLength30,
        ])}
      </li>
    );
  });

  const contactsList = Object.keys(profile.contacts).map((key) => {
    return (
      <li className={classes.item}>
        {key}: {profile.contacts[key]}
      </li>
    );
  });

  return (
    <div className={classes.wrapper}>
      {isOwner && (
        <button className={classes.button} onClick={activateEditMode}>
          <svg
            id="svg-more-dots"
            viewBox="0 0 22 6"
            preserveAspectRatio="xMinYMin meet"
            width="25px"
          >
            <path d="M19,6c-1.657,0-3-1.344-3-3c0-1.656,1.343-3,3-3s3,1.344,3,3C22,4.656,20.657,6,19,6z M19,2c-0.553,0-1,0.447-1,1c0,0.552,0.447,1,1,1c0.552,0,1-0.449,1-1C20,2.447,19.552,2,19,2z M11,6C9.343,6,8,4.656,8,3c0-1.656,1.343-3,3-3s3,1.344,3,3C14,4.656,12.657,6,11,6z M11,2c-0.553,0-1,0.447-1,1c0,0.552,0.447,1,1,1c0.552,0,1-0.449,1-1C12,2.447,11.552,2,11,2z M3,6C1.343,6,0,4.656,0,3c0-1.656,1.343-3,3-3c1.656,0,3,1.344,3,3C6,4.656,4.656,6,3,6z M3,2C2.447,2,2,2.447,2,3c0,0.552,0.447,1,1,1c0.552,0,1-0.449,1-1C4,2.447,3.552,2,3,2z"></path>
          </svg>
        </button>
      )}
      <h3>Contacts:</h3>
      {editMode ? (
        <form onSubmit={deactivateEditMode}>
          Contacts:
          {contactsForm}
          <button>Save</button>
        </form>
      ) : (
        <ul className={classes.list}>{contactsList}</ul>
      )}
    </div>
  );
};

export default reduxForm({
  form: 'edit-contacts',
})(ProfileContact);
