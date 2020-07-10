import React from 'react';
import Account from './Account';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    account: state.account,
  };
};

const AccountContainer = connect(mapStateToProps)(Account);

export default AccountContainer;
