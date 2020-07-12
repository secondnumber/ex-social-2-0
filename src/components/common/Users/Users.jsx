import React from 'react';
import classes from './Users.module.scss';
import Paginator from '../Paginator/Paginator';
import User from './User/User';

const Users = ({ users, onPageChanged, ...props }) => {
  return (
    <div className={classes.wrapper}>
      <Paginator
        totalUsersCount={users.totalUsersCount}
        pageSize={users.pageSize}
        currentPage={users.currentPage}
        onPageChanged={onPageChanged}
      />
      <ul className={classes.list}>
        {users.usersList.map((el) => (
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
