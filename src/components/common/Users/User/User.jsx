import React from 'react';
import classes from './User.module.scss';
import { NavLink } from 'react-router-dom';

const User = ({ user, users, addUser, deleteUser, defaultAvatar, followingInProgress }) => {
  return (
    <li className={classes.item}>
      <NavLink to={'/profile/' + user.id}>
        <img
          src={
            user.photos.small != null ? user.photos.small : defaultAvatar
          }
          alt=""
        />
        <div>{user.name}</div>
      </NavLink>
      <div>
        {user.followed ? (
          <button
            disabled={followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              deleteUser(user.id);
            }}
          >
            Delete Friend -
          </button>
        ) : (
          <button
            disabled={followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              addUser(user.id);
            }}
          >
            Add Friend +
          </button>
        )}
      </div>
    </li>
  );
};

export default User;
