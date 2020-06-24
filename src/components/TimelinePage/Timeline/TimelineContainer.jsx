import React from 'react';
import Timeline from './Timeline';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    timeline: state.timeline,
  };
};

let mapDispatchToProps = () => {
  return {};
};

const TimelineContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Timeline);

export default TimelineContainer;
