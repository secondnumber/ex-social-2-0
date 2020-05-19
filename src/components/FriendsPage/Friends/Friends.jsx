import React from 'react';
import classes from './Friends.module.scss';
import Friend from './Friend/Friend';

const Friends = (props) => {
  let friendsList = props.friends.friendsList.friends.map((element) => (
    <Friend
      key={element.id}
      name={element.name}
      cover={element.bgImg}
      avatar={element.avatar}
      status={element.status}
      welcome={element.welcome}
      posts={element.posts}
      friends={element.friends}
      visits={element.visits}
    />
  ));
  return <div className={classes.wrapper}>{friendsList}</div>;
};

export default Friends;
