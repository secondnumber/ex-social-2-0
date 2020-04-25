import React from 'react';
import classes from './Timeline.module.scss';
import Post from './Post/Post';

const Timeline = () => (
  <div className={classes.wrapper}>
    <h3>MY PROFILE</h3>
    <h2>Timelime</h2>
    <ul className={classes.postsArea}>
      <Post />
    </ul>
  </div>
);

export default Timeline;
