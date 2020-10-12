import React from 'react';
import classes from './Dialogs.module.scss';
import FriendItem from './FriendItem/FriendItem';
import MessageItem from './MessageItem/MessageItem';
import {FriendsDataType, MessagesDataType} from "../../../../types";

type PropsType = {
  messages: {
    friendsData: Array<FriendsDataType>
    messagesData: Array<MessagesDataType>
    newMessageBody: string
  },
  updateNewMessageBody: any
  sendMessage: any
}

const Dialogs: React.FC<PropsType> = ( {messages, updateNewMessageBody, sendMessage} ) => {
  let friendsElements = messages.friendsData.map((friend) => (
    <FriendItem key={friend.id} id={friend.id} name={friend.name} />
  ));

  let messagesElements = messages.messagesData.map((message) => (
    <MessageItem key={message.id} id={message.id} message={message.message} />
  ));

  let newMessageElement = React.createRef();

  let onSendMessage = () => {
    sendMessage();
  };

  let onMessageChange = (e: any) => {
    let body = e.target.value;
    updateNewMessageBody(body);
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
            value={messages.newMessageBody}
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
