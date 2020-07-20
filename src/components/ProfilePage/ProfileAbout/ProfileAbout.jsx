import React from 'react';
import classes from './ProfileAbout.module.scss';

const ProfileAbout = ({ isOwner, name, avatar, defaultAvatar, savePhoto }) => {
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  return (
    <div className={classes.wrapper}>
      <img className={classes.avatar} src={avatar || defaultAvatar} />
      {isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
      <p>{name}</p>
    </div>
  );
};

export default ProfileAbout;
