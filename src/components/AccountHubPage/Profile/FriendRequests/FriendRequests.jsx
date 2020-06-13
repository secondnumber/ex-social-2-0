import React from 'react';
import classes from './FriendRequests.module.scss';

const FriendRequests = () => (
  <div className={classes.wrapper}>
    <h3>MY PROFILE</h3>
    <h2>Friend Requests</h2>
    <div className={classes.messagesArea}>
      <ul>
        <li>Friend Requests</li>
      </ul>
    </div>
  </div>
);

export default FriendRequests;
