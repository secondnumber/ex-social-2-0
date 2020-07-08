import React from 'react';
import classes from './Post.module.scss';

const Post = (props) => (
  <li className={classes.item}>
    <div className={classes.avatar}>
      <img className={classes.image} src={props.avatar} alt={'Avatar'} />
      <p className={classes.author}>
        <p>{props.author}</p>
        <span>{props.time}</span>
      </p>
    </div>
    <button className={classes.button}>...</button>
    <p className={classes.text}>{props.message}</p>
    <span className={classes.likes}>{props.reactions} Likes</span>
    <span className={classes.comments}>{props.comments} Comments</span>
    <span className={classes.shares}>{props.shares} Shares</span>
    <button className={classes.like}>Like</button>
    <button className={classes.comment}>Comment</button>
    <button className={classes.share}>Share</button>
  </li>
);

export default Post;
