import React from 'react';
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from '../../../../redux/messagesReducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
  let state = props.store.getState();

  let sendMessage = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let messageChange = (body) => {
    let action = updateNewMessageBodyCreator(body);
    props.store.dispatch(action);
  };

  return (
    <Dialogs
      sendMessage={sendMessage}
      messageChange={messageChange}
      messages={state.messages}
    />
  );
};

export default DialogsContainer;
