import React from 'react';
import { connect } from 'react-redux';
import Friends from './Friends';
import {
  addFriendAC,
  deleteFriendAC,
} from '../../../redux/reducers/friendsReducer';

let mapStateToProps = (state) => {
  return {
    friends: state.friends,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addFriend: (userId) => {
      dispatch(addFriendAC(userId));
    },
    deleteFriend: (userId) => {
      dispatch(deleteFriendAC(userId));
    },
  };
};

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;
