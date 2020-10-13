import React from 'react';
import Account from './Account';
import { connect } from 'react-redux';
import {AccountInfoListType} from "../../../types";
import {AppStateType} from "../../../redux/reduxStore";

type MapStatePropsType = {
  accountInfoList: Array<AccountInfoListType>
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    accountInfoList: state.account.accountInfoList,
  };
};

const AccountContainer = connect(mapStateToProps)(Account);

export default AccountContainer;
