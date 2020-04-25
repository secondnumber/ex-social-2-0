import React from 'react';
import classes from './Dialogs.module.scss';
import FriendItem from './FriendItem/FriendItem';
import MessageItem from './MessageItem/MessageItem';

const Dialogs = () => (
  <div className={classes.wrapper}>
    <h3>MY PROFILE</h3>
    <h2>Messages</h2>
    <div className={classes.messagesArea}>
      <ul className={classes.friendsList}>
        <FriendItem name="Bearded Wonder" id="1" />
        <FriendItem name="Neko Bebop" id="2" />
        <FriendItem name="Nick Grissom" id="3" />
        <FriendItem name="Sarah Diamond" id="4" />
        <FriendItem name="Matt Parker" id="5" />
      </ul>
      <ul className={classes.messagesList}>
        <MessageItem message="Hi"/>
        <MessageItem message="Hello"/>
      </ul>
    </div>
  </div>
);

export default Dialogs;
