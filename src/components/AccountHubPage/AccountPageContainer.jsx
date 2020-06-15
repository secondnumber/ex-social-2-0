import React from 'react';
import { connect } from 'react-redux';
import { getAuthUserData } from '../../redux/reducers/authReducer';
import AccountPage from './AccountPage';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

let AuthRedirectComponent = withAuthRedirect(AccountPage);

const AccountPageContainer = connect(mapStateToProps, { getAuthUserData })(
  AuthRedirectComponent
);

export default AccountPageContainer;
