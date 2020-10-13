import React from 'react';
import classes from './Users.module.scss';
import Paginator from '../../common/Paginator/Paginator';
import User from './User/User';
import {UserType} from "../../../types";

type PropsType = {
    key: number
    users: any
    deleteUser: (id: number) => void
    addUser: (id: number) => void
    onPageChanged: (pageNumber: number) => void
    toggleFollowingProgress: any
}

const Users: React.FC<PropsType> = ({ users, onPageChanged, ...props }) => {
  return (
    <div className={classes.wrapper}>
      <Paginator
        totalItemsCount={users.totalUsersCount}
        pageSize={users.pageSize}
        currentPage={users.currentPage}
        onPageChanged={onPageChanged}
      />
      <ul className={classes.list}>
        {users.usersList.map((el: UserType) => (
          <User
            key={el.id}
            user={el}
            defaultAvatar={users.defaultAvatar}
            deleteUser={props.deleteUser}
            addUser={props.addUser}
            followingInProgress={users.followingInProgress}
          />
        ))}
      </ul>
    </div>
  );
};

export default Users;