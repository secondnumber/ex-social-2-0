import React from 'react';
import { connect } from 'react-redux';
import About from './About';
import {
  getStatus,
  updateStatus,
} from '../../../redux/reducers/timelineReducer';

class AboutContainer extends React.Component {
  componentDidMount() {
    let userId = 8712;
    this.props.getStatus(userId);
  }

  render() {
    return <About {...this.props} about={this.props.about} status={this.props.timeline.status} updateStatus={this.props.updateStatus} getStatus={this.props.getStatus}/>;
  }
}
let mapStateToProps = (state) => {
  return {
    timeline: state.timeline,
    about: state.about,
  };
};

export default connect(mapStateToProps, {
  updateStatus,
  getStatus,
})(AboutContainer);
