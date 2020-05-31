import React from 'react';
import { connect } from 'react-redux';
import {
  addFriendAC,
  deleteFriendAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC,
} from '../../../redux/reducers/friendsReducer';
import * as axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {
  componentDidMount() {
    axios
        .get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.friends.currentPage}&count=${this.props.friends.pageSize}`
        )
        .then((response) => {
          this.props.setUsers(response.data.items);
          this.props.setTotalUsersCount(response.data.totalCount);
        });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
        .get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.friends.pageSize}`
        )
        .then((response) => {
          this.props.setUsers(response.data.items);
          this.props.setTotalUsersCount(response.data.totalCount);
        });
  }

  render() {
    return <Users
        friends={this.props.friends}
        deleteFriend={this.props.deleteFriend}
        addFriend={this.props.addFriend}
        onPageChanged={this.onPageChanged}
    />
  }
}

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
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setTotalUsersCount: (totalUsersCount) => {
      dispatch(setTotalUsersCountAC(totalUsersCount));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainer);

