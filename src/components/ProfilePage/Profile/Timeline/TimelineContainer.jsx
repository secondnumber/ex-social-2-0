import React from 'react';
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../../../redux/timelineReducer';
import Timeline from './Timeline';
<<<<<<< Updated upstream

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
=======
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    timeline: state.timeline,
    newPostText: state.timeline.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    },
  };
>>>>>>> Stashed changes
};

const TimelineContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Timeline);

export default TimelineContainer;
