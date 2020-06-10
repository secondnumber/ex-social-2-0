import React from 'react';
import classes from '../../../common/Users/User/User.module.scss';

const Friend = (props) => {
  return (
    <li className={classes.item}>
      <img
        src={props.avatar != null ? props.avatar : props.defaultAvatar}
        alt=""
      />
      <div>{props.name}</div>
      <div>
        {props.followed ? (
          <button
            onClick={(userId) => {
              props.deleteFriend(props.id);
            }}
          >
            Delete Friend -
          </button>
        ) : (
          <button
            onClick={(userId) => {
              props.addFriend(props.id);
            }}
          >
            Add Friend +
          </button>
        )}
      </div>
    </li>
  );
};

export default Friend;
