import React from 'react';
import { connect } from 'react-redux';
import {
    addUser,
    deleteUser, requestUsers,
    setCurrentPage, toggleFollowingProgress,
} from '../../../redux/reducers/usersReducer';
import Users from "./Users";
import Preloader from '../../common/Preloader/Preloader'
import {getUsersSelector} from "../../../redux/usersSelect";

class UsersContainer extends React.Component {
  componentDidMount() {
      this.props.requestUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
      this.props.requestUsers(pageNumber, this.props.pageSize);
  }

  render() {
      console.log('Render');
    return <>
      {this.props.users.isFetching ? <Preloader />
          : <Users
          key={this.props.users.usersList.id}
          users={this.props.users}
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
      users: getUsersSelector(state),
  };
};


export default connect(
  mapStateToProps,
    {
      setCurrentPage,
      requestUsers,
      addUser,
      deleteUser,
      toggleFollowingProgress,
    }
)(UsersContainer);

