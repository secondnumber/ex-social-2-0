import React from 'react';
import { connect } from 'react-redux';
import {
    addFriend, addUser,
    deleteFriend, deleteUser, getUsers,
    setCurrentPage,
} from '../../../redux/reducers/friendsReducer';
import Users from "./Users";
import Preloader from '../Preloader/Preloader'

class UsersContainer extends React.Component {
  componentDidMount() {
      this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
      this.props.getUsers(pageNumber, this.props.pageSize);
  }

  render() {
    return <>
      {this.props.friends.isFetching ? <Preloader />
          : <Users
          key={this.props.friends.users.id}
          friends={this.props.friends}
          deleteUser={this.props.deleteUser}
          addUser={this.props.addUser}
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
      setCurrentPage,
      getUsers,
      addUser,
      deleteUser,
    }
)(UsersContainer);

