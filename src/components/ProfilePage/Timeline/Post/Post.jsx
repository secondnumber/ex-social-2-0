import React from 'react';
import classes from './Post.module.scss';

const Post = () => (
  <article className={classes.wrapper}>
    <div className={classes.header}>
      <div className={classes.info}>
        <img />
        <p>Marina Valentine</p>
        <p>5 hours ago</p>
      </div>
      <button>...</button>
    </div>
    <div className={classes.content}>
      <p>
        Hi to all! Remember that today I'll be livestreaming along with
        @NekoBebop the new character of the brand new Xenowatch patch "Anya
        Darkness". See you there!
      </p>
    </div>
    <div className={classes.stats}>
      <div className={classes.reactions}>12</div>
      <div className={classes.comments}>4</div>
      <div className={classes.shares}>1</div>
    </div>
    <div className={classes.interactions}>
      <div className={classes.react}>React</div>
      <div className={classes.comment}>Comment</div>
      <div className={classes.share}>Share</div>
    </div>
  </article>
);

export default Post;
