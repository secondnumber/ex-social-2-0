import React from 'react';
import Timeline from './Timeline';
import { connect } from 'react-redux';

let mapStateToProps = () => {
  return {};
};

let mapDispatchToProps = () => {
  return {};
};

const TimelineContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Timeline);

export default TimelineContainer;
