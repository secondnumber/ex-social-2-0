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

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch({ type: 'ADD-POST' });
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
    props.dispatch(action);
  };

  return (
    <div className={classes.wrapper}>
      <h3>MY PROFILE</h3>
      <h2>Timelime</h2>
      <textarea
        onChange={onPostChange}
        ref={newPostElement}
        value={props.timeline.newPostText}
      />
      <button onClick={addPost}>Add post</button>
      <ul className={classes.postsArea}>{postsElements}</ul>
    </div>
  );
};

export default Timeline;
