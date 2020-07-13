import React from 'react';
import { connect } from 'react-redux';
import MoviesFavourite from './MoviesFavourite';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';

class MoviesFavouriteContainer extends React.Component {
  componentDidMount() {}
  render() {
    return <MoviesFavourite {...this.props} />;
  }
}

let mapStateToProps = () => {
  return {};
};

export default compose(
  connect(mapStateToProps),
  withRouter,
  withAuthRedirect
)(MoviesFavouriteContainer);
