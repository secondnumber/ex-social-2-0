import React from 'react';
import { connect } from 'react-redux';
import MoviesPage from './MoviesPage';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class MoviesPageContainer extends React.Component {
  componentDidMount() {}
  render() {
    return <MoviesPage {...this.props} />;
  }
}

let mapStateToProps = () => {
  return {};
};

export default compose(
  connect(mapStateToProps),
  withRouter,
  withAuthRedirect
)(MoviesPageContainer);
