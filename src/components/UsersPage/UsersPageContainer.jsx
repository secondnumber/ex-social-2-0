import React from 'react';
import { connect } from 'react-redux';
import UsersPage from './UsersPage';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { withRouter } from 'react-router-dom';

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

const UsersPageContainer = connect(mapStateToProps)(UsersPage);

export default compose(
  connect(mapStateToProps),
  withRouter,
  withAuthRedirect
)(UsersPageContainer);
