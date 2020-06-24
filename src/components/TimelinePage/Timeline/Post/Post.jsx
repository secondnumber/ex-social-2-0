import React from 'react';
import classes from './Post.module.scss';

const Post = (props) => (
  <li className={classes.item}>
    <p>{props.author}</p>
    <p>{props.time}</p>
    <p>{props.message}</p>
    <span>{props.reactions}</span>
    <span>{props.comments}</span>
    <span>{props.shares}</span>
  </li>
);

export default Post;
