import React from 'react';
import { connect } from 'react-redux';
import {
  addFriendAC,
  deleteFriendAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC,
} from '../../../redux/reducers/friendsReducer';
import Users from './Users';

let mapStateToProps = (state) => {
  return {
    friends: state.friends,
    pageSize: state.friends.pageSize,
    totalUsersCount: state.friends.totalUsersCount,
    currentPage: state.friends.currentPage,
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
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setTotalUsersCount: (totalUsersCount) => {
      dispatch(setTotalUsersCountAC(totalUsersCount));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
