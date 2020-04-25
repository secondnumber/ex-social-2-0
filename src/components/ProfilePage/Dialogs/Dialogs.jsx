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

  return (
    <div className={classes.wrapper}>
      <h3>MY PROFILE</h3>
      <h2>Messages</h2>
      <div className={classes.messagesArea}>
        <ul className={classes.friendsList}>
          <FriendItem name={friendsData[0].name} id={friendsData[0].id} />
          <FriendItem name={friendsData[1].name} id={friendsData[1].id} />
          <FriendItem name={friendsData[2].name} id={friendsData[2].id} />
          <FriendItem name={friendsData[3].name} id={friendsData[3].id} />
          <FriendItem name={friendsData[4].name} id={friendsData[4].id} />
        </ul>
        <ul className={classes.messagesList}>
          <MessageItem message={messagesData[0].message} />
          <MessageItem message={messagesData[1].message} />
          <MessageItem message={messagesData[2].message} />
        </ul>
      </div>
    </div>
  );
};

export default Dialogs;
