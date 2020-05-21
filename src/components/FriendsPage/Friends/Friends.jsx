import React from 'react';
import classes from './Friends.module.scss';
import Friend from './Friend/Friend';

const Friends = (props) => {
  let deleteFriend = (userId) => {
    props.deleteFriend(userId);
  };

  let addFriend = (userId) => {
    props.addFriend(userId);
  };

  let friendsList = props.friends.users.map((element) => (
    <Friend
      key={element.id}
      id={element.id}
      followed={element.followed}
      name={element.name}
      addFriend={addFriend}
      deleteFriend={deleteFriend}
    />
  ));
  return (
    <div className={classes.wrapper}>
      <ul className={classes.list}>{friendsList}</ul>
    </div>
  );
};

export default Friends;
