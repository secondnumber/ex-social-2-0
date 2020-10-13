import React from 'react';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import {
  sendMessage,
  updateNewMessageBody,
} from '../../../../redux/reducers/messagesReducer';
import {AppStateType} from "../../../../redux/reduxStore";
import {FriendsDataType, MessagesDataType} from "../../../../types";

type MapStatePropsType = {
  messages: {
    friendsData: Array<FriendsDataType>
    messagesData: Array<MessagesDataType>
    newMessageBody: string
  },
  newMessageBody: string
}

type MapDispatchPropsType = {
  sendMessage: () => void
  updateNewMessageBody: () => void
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
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