import React from 'react';
import classes from './Timeline.module.scss';
import Post from './Post/Post';

const Timeline = (props) => {
  let postsElements = props.timeline.postsData.map((post) => (
    <Post
      message={post.message}
      author={post.author}
      time={post.time}
      reactions={post.reactions}
      comments={post.comments}
      shares={post.shares}
    />
  ));
  return (
    <div className={classes.wrapper}>
      <h3>MY PROFILE</h3>
      <h2>Timelime</h2>
      <ul className={classes.postsArea}>
        {postsElements}
      </ul>
    </div>
  );
};

export default Timeline;
