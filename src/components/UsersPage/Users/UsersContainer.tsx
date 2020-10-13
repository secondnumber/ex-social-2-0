import React from 'react';
import { connect } from 'react-redux';
import {
    addUser,
    deleteUser, requestUsers,
    toggleFollowingProgress,
} from '../../../redux/reducers/usersReducer';
import Users from "./Users";
import Preloader from '../../common/Preloader/Preloader'
import {getUsersSelector} from "../../../redux/usersSelect";
import {AppStateType} from "../../../redux/reduxStore";

type MapStatePropsType = {
    users: any
}

type MapDispatchPropsType = {
    deleteUser: (id: number) => void
    addUser: (id: number) => void
    requestUsers: (currentPage: number, pageSize: number) => void
    toggleFollowingProgress: any
}

type OwnPropsType = {
    pageTitile: string
    pageNumber: number
    currentPage: number
    pageSize: number
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersContainer extends React.Component<PropsType> {
  componentDidMount() {
      const { requestUsers, currentPage, pageSize } = this.props;
      requestUsers(currentPage, pageSize);
  }

  onPageChanged = (pageNumber: number) => {
      const { pageSize } = this.props;
      requestUsers(pageNumber, pageSize);
  }

  render() {
    const { users, deleteUser, addUser, toggleFollowingProgress } = this.props;
    return <>
        <h2>{this.props.pageTitile}</h2>
      {this.props.users.isFetching ? <Preloader />
          : <Users
          key={users.usersList.id}
          users={users}
          deleteUser={deleteUser}
          addUser={addUser}
          onPageChanged={this.onPageChanged}
          toggleFollowingProgress={toggleFollowingProgress}
      />}
    </>
  }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
      users: getUsersSelector(state),
  };
};


export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
  mapStateToProps,
    {
      requestUsers,
      addUser,
      deleteUser,
      toggleFollowingProgress,
    }
)(UsersContainer);

