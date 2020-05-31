import React from 'react';
import classes from './Users.module.scss';

const Users = (props) => {
  let pagesCount = Math.ceil(
    props.friends.totalUsersCount / props.friends.pageSize
  );
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div className={classes.wrapper}>
      <div>
        {pages.map((page) => (
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
        ))}
      </div>
      <ul className={classes.list}>
        {props.friends.users.map((el) => {
          return (
            <li className={classes.item}>
              <img
                src={
                  el.avatar != null ? el.avatar : props.friends.defaultAvatar
                }
                alt=""
              />
              <div>{el.name}</div>
              <div>
                {el.followed ? (
                  <button
                    onClick={(userId) => {
                      props.deleteFriend(el.id);
                    }}
                  >
                    Delete Friend -
                  </button>
                ) : (
                  <button
                    onClick={(userId) => {
                      props.addFriend(el.id);
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
