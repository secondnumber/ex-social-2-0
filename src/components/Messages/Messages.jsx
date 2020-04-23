import React from 'react';
import classes from './Messages.module.scss';

const Messages = () => (
  <div className={classes.wrapper}>
    <h3>MY PROFILE</h3>
    <h2>Messages</h2>
    <div className={classes.messagesArea}>
      <ul className={classes.friendsList}>
        <li className={classes.friendsItem}>Bearded Wonder</li>
        <li className={classes.friendsItem}>Neko Bebop</li>
        <li className={classes.friendsItem}>Nick Grissom</li>
        <li className={classes.friendsItem}>Sarah Diamond</li>
        <li className={classes.friendsItem}>Matt Parker</li>
      </ul>
      <ul>Text</ul>
    </div>
  </div>
);

export default Messages;
