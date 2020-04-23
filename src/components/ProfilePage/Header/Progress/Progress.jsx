import React from 'react';
import classes from './Progress.module.scss';

const Progress = () => (
  <div className={classes.wrapper}>
    <div className={classes.caption}>NEXT:</div>
    <div className={classes.level}>38 EXP</div>
    <div className={classes.progressbar}>
      <div className={classes.progress}></div>
    </div>
  </div>
);

export default Progress;
