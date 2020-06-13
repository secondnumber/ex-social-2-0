import React from 'react';
import classes from './Users.module.scss';
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../../api/api';

const Users = (props) => {
    debugger;
  let pagesCount = Math.ceil(
    props.friends.totalUsersCount / props.friends.pageSize
  );
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div className={classes.wrapper}>
      <div className={classes.pages}>
        {pages.map((page) => {
          if (page <= 20) {
            return (
              <span
                className={
                  props.friends.currentPage === page
                    ? classes.selectedPage
                    : classes.pageNumber
                }
                onClick={(event) => {
                  props.onPageChanged(page);
                }}
              >
                {page}
              </span>
            );
          }
        })}
      </div>
      <ul className={classes.list}>
        {props.friends.users.map((el) => {
          return (
            <li className={classes.item}>
              <NavLink to={'/profile/' + el.id}>
                <img
                  src={
                    el.photos.small != null
                      ? el.photos.small
                      : props.friends.defaultAvatar
                  }
                  alt=""
                />
                <div>{el.name}</div>
              </NavLink>
              <div>
                {el.followed ? (
                  <button
                    disabled={props.friends.followingInProgress}
                    onClick={(userId) => {
                      props.toggleFollowingProgress(true);
                      usersAPI.deleteUser(el.id).then((response) => {
                        if (response.resultCode === 0) {
                          props.deleteFriend(el.id);
                        }
                        props.toggleFollowingProgress(false);
                      });
                    }}
                  >
                    Delete Friend -
                  </button>
                ) : (
                  <button
                    disabled={props.friends.followingInProgress}
                    onClick={(userId) => {
                      props.toggleFollowingProgress(true);
                      usersAPI.addUser(el.id).then((response) => {
                        if (response.resultCode === 0) {
                          props.addFriend(el.id);
                        }
                        props.toggleFollowingProgress(false);
                      });
                    }}
                  >
                    Add Friend +
                  </button>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Users;
