import React from 'react';
import classes from './Users.module.scss';
import { NavLink } from 'react-router-dom';

const Users = (props) => {
  let pagesCount = Math.ceil(
    props.users.totalUsersCount / props.users.pageSize
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
                  props.users.currentPage === page
                    ? classes.selectedPage
                    : classes.pageNumber
                }
                onClick={() => {
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
        {props.users.usersList.map((el) => {
          return (
            <li className={classes.item}>
              <NavLink to={'/profile/' + el.id}>
                <img
                  src={
                    el.photos.small != null
                      ? el.photos.small
                      : props.users.defaultAvatar
                  }
                  alt=""
                />
                <div>{el.name}</div>
              </NavLink>
              <div>
                {el.followed ? (
                  <button
                    disabled={props.users.followingInProgress.some(
                      (id) => id === el.id
                    )}
                    onClick={() => {
                      props.deleteUser(el.id);
                    }}
                  >
                    Delete Friend -
                  </button>
                ) : (
                  <button
                    disabled={props.users.followingInProgress.some(
                      (id) => id === el.id
                    )}
                    onClick={() => {
                      props.addUser(el.id);
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
