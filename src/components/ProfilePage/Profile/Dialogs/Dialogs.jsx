import React from 'react';
import classes from './Dialogs.module.scss';
import FriendItem from './FriendItem/FriendItem';
import MessageItem from './MessageItem/MessageItem';
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from '../../../../redux/messagesReducer';

const Dialogs = (props) => {
  let state = props.store.getState().messages;

  let friendsElements = state.friendsData.map((friend) => (
    <FriendItem id={friend.id} name={friend.name} />
  ));

  let messagesElements = state.messagesData.map((message) => (
    <MessageItem id={message.id} message={message.message} />
  ));

  let newMessageElement = React.createRef();

  let sendMessage = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let onMessageChange = (e) => {
    let body = e.target.value;
    let action = updateNewMessageBodyCreator(body);
    props.store.dispatch(action);
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
            value={state.newMessageBody}
          ></textarea>
          <button className={classes.button} onClick={sendMessage}>
            Add message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
