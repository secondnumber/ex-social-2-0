import React from 'react';
import classes from './ProfileAbout.module.scss';

const ProfileAbout = ({
  isOwner,
  profile,
  avatars,
  defaultAvatar,
  savePhoto,
}) => {
  debugger;
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  return (
    <div className={classes.wrapper}>
      <img className={classes.avatar} src={avatars.large || defaultAvatar} />
      {isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
      <p>{profile.fullName}</p>
      <p>
        Looking for a job:
        {profile.lookingForAJob ? ' Yes' : ' No'}
      </p>
      <p>
        About me:
        {profile.lookingForAJobDescription ? (
          <span>{profile.lookingForAJobDescription}</span>
        ) : (
          ' No'
        )}
      </p>
    </div>
  );
};

export default ProfileAbout;
