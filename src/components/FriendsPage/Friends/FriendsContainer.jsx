import React from 'react';
import { connect } from 'react-redux';
import Friends from './Friends';
import {
  addFriend,
  deleteFriend,
  setUsers,
} from '../../../redux/reducers/usersReducer';

let mapStateToProps = (state) => {
  return {
    friends: state.friends,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addFriend: (userId) => {
      dispatch(addFriend(userId));
    },
    deleteFriend: (userId) => {
      dispatch(deleteFriend(userId));
    },
    setUsers: (users) => {
      dispatch(setUsers(users));
    },
  };
};

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;
