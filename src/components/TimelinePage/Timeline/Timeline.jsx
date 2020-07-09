import React from 'react';
import classes from './Timeline.module.scss';
import TimelineForm from './TimelineForm/TimelineForm';
import Post from './Post/Post';

const Timeline = (props) => {
  let postsList = props.timeline.postsData.map((el) => (
    <Post
      key={el.id}
      author={el.author}
      avatar={el.avatarImg}
      time={el.time}
      message={el.message}
      reactions={el.reactions}
      comments={el.comments}
      shares={el.shares}
    />
  ));

  let addNewMessage = (value) => {
    props.addPost(value.post);
  };

  return (
    <div className={classes.wrapper}>
      <TimelineForm onSubmit={addNewMessage} />
      <ul className={classes.list}>{postsList}</ul>
    </div>
  );
};

export default Timeline;
