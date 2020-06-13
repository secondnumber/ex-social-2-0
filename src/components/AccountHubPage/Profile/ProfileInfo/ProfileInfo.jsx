import React from 'react';
import classes from './ProfileInfo.module.scss';

const ProfileInfo = () => (
  <div className={classes.wrapper}>
    <h3>MY PROFILE</h3>
    <h2>ProfileInfo</h2>
    <div className={classes.messagesArea}>
      <ul>
        <li>ProfileInfo</li>
      </ul>
    </div>
  </div>
);

export default ProfileInfo;
