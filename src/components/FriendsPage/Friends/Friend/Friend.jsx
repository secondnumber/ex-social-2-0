import React from 'react';
import classes from './Friend.module.scss';

const Friend = (props) => {

  return (
    <li className={classes.item}>
      {props.name}
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
