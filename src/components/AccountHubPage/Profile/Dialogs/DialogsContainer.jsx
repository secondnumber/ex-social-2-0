import React from 'react';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import {
  sendMessage,
  updateNewMessageBody,
} from '../../../../redux/reducers/messagesReducer';

let mapStateToProps = (state) => {
  return {
    messages: state.messages,
    newMessageBody: state.messages.newMessageBody,
  };
};

const DialogsContainer = connect(mapStateToProps, {
  sendMessage,
  updateNewMessageBody,
})(Dialogs);

export default DialogsContainer;
