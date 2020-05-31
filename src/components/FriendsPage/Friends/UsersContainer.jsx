import React from 'react';
import { connect } from 'react-redux';
import {
  addFriend,
  deleteFriend,
  setCurrentPage,
  setTotalUsersCount,
  setUsers, toggleIsFetching,
} from '../../../redux/reducers/friendsReducer';
import * as axios from "axios";
import Users from "./Users";
import Preloader from '../../common/Preloader/Preloader'

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
        .get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.friends.currentPage}&count=${this.props.friends.pageSize}`
        )
        .then((response) => {
          this.props.setUsers(response.data.items);
          this.props.setTotalUsersCount(response.data.totalCount);
          this.props.toggleIsFetching(false);
        });
  }

  onPageChanged = (pageNumber) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    axios
        .get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.friends.pageSize}`
        )
        .then((response) => {
          this.props.setUsers(response.data.items);
          this.props.setTotalUsersCount(response.data.totalCount);
          this.props.toggleIsFetching(false);
        });
  }
  toggleIsFetching = (isLoaded) => {
    this.props.toggleIsFetching(false);
  }

  render() {
    return <>
      {this.props.friends.isFetching ? <Preloader />
          : <Users
          friends={this.props.friends}
          deleteFriend={this.props.deleteFriend}
          addFriend={this.props.addFriend}
          onPageChanged={this.onPageChanged}
      />}
    </>
  }
}

let mapStateToProps = (state) => {
  return {
    friends: state.friends,
  };
};


export default connect(
  mapStateToProps,
    {
      addFriend,
      deleteFriend,
      setUsers,
      setCurrentPage,
      setTotalUsersCount,
      toggleIsFetching,
    }
)(UsersContainer);

