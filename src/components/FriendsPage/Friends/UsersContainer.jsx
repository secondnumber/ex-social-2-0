import React from 'react';
import { connect } from 'react-redux';
import Friends from './Friends';
import {
  addFriendAC,
  deleteFriendAC,
  setUsersAC,
} from '../../../redux/reducers/friendsReducer';
import Users from './Users';

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
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
