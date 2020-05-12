import React from 'react';
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../../../redux/timelineReducer';
import Timeline from './Timeline';

const TimelineContainer = (props) => {
  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };

  let state = props.store.getState();

  return (
    <Timeline
      updateNewPostText={onPostChange}
      addPost={addPost}
      timeline={state.timeline}
    />
  );
};

export default TimelineContainer;
