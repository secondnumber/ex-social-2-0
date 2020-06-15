import React from 'react';
import { connect } from 'react-redux';
import FriendsPage from './FriendsPage';

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

const FriendsPageContainer = connect(mapStateToProps)(FriendsPage);

export default FriendsPageContainer;
