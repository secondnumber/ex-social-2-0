import React from 'react';
import classes from './Timeline.module.scss';

const Timeline = () => (
  <div className={classes.wrapper}>
    <h3>MY PROFILE</h3>
    <h2>Timelime</h2>
    <div className={classes.messagesArea}>
      <ul>Posts</ul>
    </div>
  </div>
);

export default Timeline;
