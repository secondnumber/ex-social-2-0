import React from 'react';
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from '../../../../redux/messagesReducer';
import Dialogs from './Dialogs';
import StoreContext from '../../../../storeContext';

const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      { store => {
        let state = store.getState();
        let sendMessage = () => {
          store.dispatch(sendMessageCreator());
        };

        let messageChange = (body) => {
          let action = updateNewMessageBodyCreator(body);
          store.dispatch(action);
        };
        return (
          <Dialogs
            sendMessage={sendMessage}
            messageChange={messageChange}
            messages={state.messages}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
