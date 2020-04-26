import React from 'react';
import classes from './Dialogs.module.scss';
import FriendItem from './FriendItem/FriendItem';
import MessageItem from './MessageItem/MessageItem';

const Dialogs = () => {
  let friendsData = [
    { id: 1, name: 'Bearded Wonder' },
    { id: 2, name: 'Neko Bebop' },
    { id: 3, name: 'Nick Grissom' },
    { id: 4, name: 'Sarah Diamond' },
    { id: 5, name: 'Matt Parker' },
  ];

  let messagesData = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'Hello' },
    { id: 3, message: 'How are you?' },
  ];

  let friendsElements = friendsData.map((friend) => (
    <FriendItem id={friend.id} name={friend.name} />
  ));

  let messagesElements = messagesData.map((message) => (
    <MessageItem id={message.id} message={message.message} />
  ));

  return (
    <div className={classes.wrapper}>
      <h3>MY PROFILE</h3>
      <h2>Messages</h2>
      <div className={classes.messagesArea}>
        <ul className={classes.friendsList}>
          {friendsElements}
        </ul>
        <ul className={classes.messagesList}>
          {messagesElements}
        </ul>
      </div>
    </div>
  );
};

export default Dialogs;
