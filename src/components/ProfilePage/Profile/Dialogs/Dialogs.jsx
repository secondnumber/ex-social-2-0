import React from 'react';
import classes from './Dialogs.module.scss';
import FriendItem from './FriendItem/FriendItem';
import MessageItem from './MessageItem/MessageItem';

const Dialogs = (props) => {
  let friendsElements = props.messages.friendsData.map((friend) => (
    <FriendItem key={friend.id} id={friend.id} name={friend.name} />
  ));

  let messagesElements = props.messages.messagesData.map((message) => (
    <MessageItem key={message.id} id={message.id} message={message.message} />
  ));

  let newMessageElement = React.createRef();

  let onSendMessage = () => {
    props.sendMessage();
  };

  let onMessageChange = (e) => {
    let body = e.target.value;
    props.messageChange(body);
  };

  return (
    <div className={classes.wrapper}>
      <h3>MY PROFILE</h3>
      <h2>Messages</h2>
      <div className={classes.messagesArea}>
        <ul className={classes.friendsList}>{friendsElements}</ul>
        <div className={classes.dialogsArea}>
          <ul className={classes.messagesList}>{messagesElements}</ul>
          <textarea
            className={classes.textarea}
            onChange={onMessageChange}
            ref={newMessageElement}
            value={props.newMessageBody}
          ></textarea>
          <button className={classes.button} onClick={onSendMessage}>
            Add message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
