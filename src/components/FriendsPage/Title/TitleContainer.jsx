import React from 'react';
import { connect } from 'react-redux';
import Title from './Title';

let mapStateToProps = (state) => {
  return {
    friends: state.friends,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Title);

export default FriendsContainer;