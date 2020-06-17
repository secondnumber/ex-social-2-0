import React from 'react';
import { connect } from 'react-redux';
import TimelinePage from './TimelinePage';

let mapStateToProps = (state) => {
  return {};
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const TimelinePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TimelinePage);

export default TimelinePageContainer;
