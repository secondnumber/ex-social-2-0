import React from 'react';
import classes from './ProfileAbout.module.scss';

const ProfileAbout = ({ isOwner, name, avatars, defaultAvatar, savePhoto }) => {
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  return (
    <div className={classes.wrapper}>
      <img className={classes.avatar} src={avatars.large || defaultAvatar} />
      {isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
      <p>{name}</p>
    </div>
  );
};

export default ProfileAbout;
