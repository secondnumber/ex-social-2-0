import React from 'react';
import { connect } from 'react-redux';
import { getAuthUserData } from '../../redux/reducers/authReducer';
import AccountPage from './AccountPage';

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

const AccountPageContainer = connect(mapStateToProps, { getAuthUserData })(
  AccountPage
);

export default AccountPageContainer;
