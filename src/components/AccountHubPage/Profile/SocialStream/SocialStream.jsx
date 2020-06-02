import React from 'react';
import classes from './SocialStream.module.scss';

const SocialStream = () => (
  <div className={classes.wrapper}>
    <h3>MY PROFILE</h3>
    <h2>Social and Stream</h2>
    <div className={classes.messagesArea}>
      <ul>
        <li>Social and Stream</li>
      </ul>
    </div>
  </div>
);

export default SocialStream;
