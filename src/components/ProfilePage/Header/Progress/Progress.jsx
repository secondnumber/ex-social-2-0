import React from 'react';
import classes from './Progress.module.scss';

const Progress = (props) => (
  <div className={classes.wrapper}>
    <div className={classes.caption}>NEXT:</div>
    <div className={classes.level}>{props.progressCount} EXP</div>
    <div className={classes.progressbar}>
      <div className={classes.progress}></div>
    </div>
  </div>
);

export default Progress;
