import React from 'react';
import classes from './Friend.module.scss';

const Friend = (props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.cover}></div>
      <p className={classes.name}>{props.name}</p>
      <p className={classes.status}>{props.status}</p>
      <div className={classes.badges}></div>
      <div className={classes.stats}>
        <div>
          <span>{props.posts}</span>
          <span>Posts</span>
        </div>
        <div>
          <span>{props.friends}</span>
          <span>Friends</span>
        </div>
        <div>
          <span>{props.visits}</span>
          <span>Visits</span>
        </div>
      </div>
      <div className={classes.social}></div>
      <div className={classes.buttons}>
        <button>Add Friend +</button>
        <button>Send Message</button>
      </div>
    </div>
  );
};

export default Friend;