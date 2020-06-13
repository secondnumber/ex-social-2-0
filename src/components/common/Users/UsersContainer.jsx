import React from 'react';
import { connect } from 'react-redux';
import {
    addFriend,
    deleteFriend,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress, toggleIsFetching,
} from '../../../redux/reducers/friendsReducer';
import Users from "./Users";
import Preloader from '../Preloader/Preloader'
import {usersAPI} from "../../../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(this.props.friends.currentPage, this.props.friends.pageSize).then((response) => {
          this.props.setUsers(response.items);
          this.props.setTotalUsersCount(response.totalCount);
          this.props.toggleIsFetching(false);
        });
  }

  onPageChanged = (pageNumber) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
      usersAPI.getUsers(this.props.friends.pageNumber, this.props.friends.pageSize).then((response) => {
          this.props.setUsers(response.items);
          this.props.setTotalUsersCount(response.totalCount);
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
          key={this.props.friends.users.id}
          friends={this.props.friends}
          deleteFriend={this.props.deleteFriend}
          addFriend={this.props.addFriend}
          onPageChanged={this.onPageChanged}
          toggleFollowingProgress={this.props.toggleFollowingProgress}
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
      toggleFollowingProgress,
    }
)(UsersContainer);

