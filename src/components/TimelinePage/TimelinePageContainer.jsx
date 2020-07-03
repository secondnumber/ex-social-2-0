import React from 'react';
import { connect } from 'react-redux';
import TimelinePage from './TimelinePage';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class TimelinePageContainer extends React.Component {
  componentDidMount() {}
  render() {
    return <TimelinePage {...this.props} />;
  }
}

let mapStateToProps = () => {
  return {};
};

export default compose(
  connect(mapStateToProps),
  withRouter, withAuthRedirect
)(TimelinePageContainer);
