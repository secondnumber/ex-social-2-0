import React from 'react';
import classes from './Post.module.scss';

const Post = (props) => (
  <article className={classes.wrapper}>
    <div className={classes.header}>
      <div className={classes.info}>
        <img />
        <p>{props.author}</p>
        <p>{props.time}</p>
      </div>
      <button>...</button>
    </div>
    <div className={classes.content}>
      <p>
        {props.message}
      </p>
    </div>
    <div className={classes.stats}>
      <div className={classes.reactions}>{props.reactions}</div>
      <div className={classes.comments}>{props.comments}</div>
      <div className={classes.shares}>{props.shares}</div>
    </div>
    <div className={classes.interactions}>
      <div className={classes.react}>React</div>
      <div className={classes.comment}>Comment</div>
      <div className={classes.share}>Share</div>
    </div>
  </article>
);

export default Post;
