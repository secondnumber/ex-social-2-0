import React from 'react';
import { connect } from 'react-redux';
import FriendsFilter from './FriendsFilter';

let mapStateToProps = (state) => {
  return {
    friendFilter: state.friendFilter,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const FriendsFilterContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsFilter);

export default FriendsFilterContainer;