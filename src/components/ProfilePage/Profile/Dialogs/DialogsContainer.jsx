import React from 'react';
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from '../../../../redux/messagesReducer';
import Dialogs from './Dialogs';
<<<<<<< Updated upstream

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
=======
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    messages: state.messages,
    newMessageBody: state.messages.newMessageBody,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
    messageChange: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
  };
>>>>>>> Stashed changes
};

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);

export default DialogsContainer;
