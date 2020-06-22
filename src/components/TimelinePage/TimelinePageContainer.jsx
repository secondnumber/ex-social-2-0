import React from 'react';
import { connect } from 'react-redux';
import TimelinePage from './TimelinePage';

class TimelinePageContainer extends React.Component {
  componentDidMount() {}
  render() {
    return <TimelinePage {...this.props} />;
  }
}

let mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps)(TimelinePageContainer);
