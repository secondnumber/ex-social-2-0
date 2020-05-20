import React from 'react';
import classes from './Friends.module.scss';

const Friends = (props) => {
  return (
    <div>
      {props.friends.users.map((element) => (
        <div>
          {element.followed ? (
            <button
              onClick={(userId) => {
                props.deleteFriend(element.id);
              }}
            >
              Delete Friend -
            </button>
          ) : (
            <button
              onClick={(userId) => {
                props.addFriend(element.id);
              }}
            >
              Add Friend +
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Friends;
