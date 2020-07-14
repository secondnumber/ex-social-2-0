import React from 'react';
import { connect } from 'react-redux';
import MoviesPage from './MoviesPage';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getMovie } from '../../redux/reducers/moviesReducer';

class MoviesPageContainer extends React.Component {
  componentDidMount() {}
  render() {
    return <MoviesPage {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

export default compose(
  connect(mapStateToProps, { getMovie }),
  withRouter,
  withAuthRedirect
)(MoviesPageContainer);
