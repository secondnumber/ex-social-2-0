import React from 'react';
import Timeline from './Timeline';
import { connect } from 'react-redux';
import { addPost } from '../../../redux/reducers/timelineReducer';

let mapStateToProps = (state) => {
  return {
    timeline: state.timeline,
  };
};

const TimelineContainer = connect(mapStateToProps, { addPost })(Timeline);

export default TimelineContainer;
