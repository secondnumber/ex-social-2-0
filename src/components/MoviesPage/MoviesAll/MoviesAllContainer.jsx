import React from 'react';
import { connect } from 'react-redux';
import MoviesAll from './MoviesAll';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';

class MoviesAllContainer extends React.Component {
  componentDidMount() {}
  render() {
    return <MoviesAll {...this.props} />;
  }
}

let mapStateToProps = () => {
  return {};
};

export default compose(
  connect(mapStateToProps),
  withRouter,
  withAuthRedirect
)(MoviesAllContainer);
