import React from 'react';
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../../../redux/timelineReducer';
import Timeline from './Timeline';
import StoreContext from '../../../../storeContext';

const TimelineContainer = (props) => {
  return (
    <StoreContext.Consumer>
      { store => {
        let state = store.getState();

        let addPost = () => {
          store.dispatch(addPostActionCreator());
        };

        let onPostChange = (text) => {
          let action = updateNewPostTextActionCreator(text);
          store.dispatch(action);
        };

        return (
          <Timeline
            updateNewPostText={onPostChange}
            addPost={addPost}
            timeline={state.timeline}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default TimelineContainer;
