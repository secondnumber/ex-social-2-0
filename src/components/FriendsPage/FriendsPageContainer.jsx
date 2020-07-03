import React from 'react';
import { connect } from 'react-redux';
import FriendsPage from './FriendsPage';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { withRouter } from 'react-router-dom';

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

const FriendsPageContainer = connect(mapStateToProps)(FriendsPage);

export default compose(
  connect(mapStateToProps),
  withRouter,
  withAuthRedirect
)(FriendsPageContainer);
