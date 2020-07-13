import React from 'react';
import { connect } from 'react-redux';
import MoviesFilter from './MoviesFilter';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';

class MoviesFilterContainer extends React.Component {
  componentDidMount() {}
  render() {
    return <MoviesFilter {...this.props} />;
  }
}

let mapStateToProps = () => {
  return {};
};

export default compose(
  connect(mapStateToProps),
  withRouter,
  withAuthRedirect
)(MoviesFilterContainer);
