import React from 'react';
import classes from './Dialogs.module.scss';
import FriendItem from './FriendItem/FriendItem';
import MessageItem from './MessageItem/MessageItem';

const Dialogs = (props) => {
  let friendsElements = props.messages.friendsData.map((friend) => (
    <FriendItem id={friend.id} name={friend.name} />
  ));

  let messagesElements = props.messages.messagesData.map((message) => (
    <MessageItem id={message.id} message={message.message} />
  ));

  let newMessageElement = React.createRef();

  let addMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);
  };

  return (
    <div className={classes.wrapper}>
      <h3>MY PROFILE</h3>
      <h2>Messages</h2>
      <div className={classes.messagesArea}>
        <ul className={classes.friendsList}>{friendsElements}</ul>
        <ul className={classes.messagesList}>{messagesElements}</ul>
        <textarea ref={newMessageElement}></textarea>
        <button onClick={addMessage}>Add message</button>
      </div>
    </div>
  );
};

export default Dialogs;
