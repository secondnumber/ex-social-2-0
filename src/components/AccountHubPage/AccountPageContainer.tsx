import React from 'react';
import { connect } from 'react-redux';
import { getAuthUserData } from '../../redux/reducers/authReducer';
import AccountPage from './AccountPage';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import {AppStateType} from "../../redux/reduxStore";

type MapStatePropsType = {
  isAuth: boolean
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    isAuth: state.auth.isAuth,
  };
};

let AuthRedirectComponent = withAuthRedirect(AccountPage);

const AccountPageContainer = connect(mapStateToProps, { getAuthUserData })(
  AuthRedirectComponent
);

export default AccountPageContainer;
