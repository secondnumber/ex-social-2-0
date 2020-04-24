import React from 'react';
import classes from './Notifications.module.scss';

const Notifications = () => (
  <div className={classes.wrapper}>
    <h3>MY PROFILE</h3>
    <h2>Notifications</h2>
    <div className={classes.messagesArea}>
      <ul>
        <li>Notifications</li>
      </ul>
    </div>
  </div>
);

export default Notifications;
