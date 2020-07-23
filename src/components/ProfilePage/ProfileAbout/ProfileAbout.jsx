import React, { useEffect, useState } from 'react';
import classes from './ProfileAbout.module.scss';
import { reduxForm, Field } from 'redux-form';
import { createField, Input, Textarea } from '../../common/FormsControls/Form';
import { maxLengthCreator } from '../../../utils/validators/validators';

const maxLength30 = maxLengthCreator(30);

const ProfileAbout = ({ handleSubmit, error, ...props }) => {
  const [editMode, setEditMode] = useState(false);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    handleSubmit().then(() => {
      setEditMode(false);
    });
  };

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  const contactsFormInputs = Object.keys(props.profile.contacts).map((key) => {
    return (
      <li className={classes.item}>
        {key}:{' '}
        {createField(Input, 'contacts.' + key, 'text', key, [maxLength30])}
      </li>
    );
  });

  const contactsList = Object.keys(props.profile.contacts).map((key) => {
    return (
      <p>
        {key}: {props.profile.contacts[key]}
      </p>
    );
  });

  return (
    <div className={classes.wrapper}>
      {props.isOwner && (
        <button className={classes.toggle} onClick={activateEditMode}>
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
      <img
        className={classes.avatar}
        src={props.avatars.large || props.defaultAvatar}
      />
      {props.isOwner && (
        <label className={classes.upload}>
          Upload image
          <input type={'file'} onChange={onMainPhotoSelected} />
        </label>
      )}
      {editMode ? (
        <form className={classes.form} onSubmit={deactivateEditMode}>
          About me:
          {createField(Input, 'fullName', 'text', 'Full name', [maxLength30])}
          {createField(Input, 'aboutMe', 'text', 'About me', [maxLength30])}
          <div>
            {createField(
              Input,
              'lookingForAJob',
              'checkbox',
              'Looking for a job',
              [maxLength30]
            )}
            Looking for a job
          </div>
          {createField(
            Textarea,
            'lookingForAJobDescription',
            'text',
            'My professional skills'
          )}
          <h3>Contact me:</h3>
          <ul>{contactsFormInputs}</ul>
          {error && <div className={classes.formSummaryError}>{error}</div>}
          {!error && <div className={classes.formFreePlace}></div>}
          <button className={classes.button}>Save</button>
        </form>
      ) : (
        <div>
          <h3>Info:</h3>
          <p className={classes.caption}>Full name: {props.profile.fullName}</p>
          <p className={classes.caption}>About me: {props.profile.fullName}</p>
          <p className={classes.caption}>
            Looking for a job:
            {props.profile.lookingForAJob ? ' Yes' : ' No'}
          </p>
          <p className={classes.caption}>
            My professional skills: {props.profile.lookingForAJobDescription}
          </p>
          <h3>Contact me:</h3>
          <ul>{contactsList}</ul>
        </div>
      )}
    </div>
  );
};

export default reduxForm({
  form: 'edit-profile',
})(ProfileAbout);
