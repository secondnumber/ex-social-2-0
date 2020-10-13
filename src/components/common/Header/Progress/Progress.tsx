import React from 'react';
import classes from './Progress.module.scss';

type PropsType = {
    key: number
    progressCount: number
}

const Progress: React.FC<PropsType> = ({ progressCount }) => (
  <div className={classes.wrapper}>
    <div className={classes.caption}>NEXT:</div>
    <div className={classes.level}>{progressCount} EXP</div>
    <div className={classes.progressbar}>
      <div className={classes.progress}></div>
    </div>
  </div>
);

export default Progress;
