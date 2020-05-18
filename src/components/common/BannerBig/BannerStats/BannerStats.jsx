import React from 'react';
import classes from './BannerStats.module.scss';

const BannerStats = (props) => {
  return (
    <li className={classes.item}>
      <span className={classes.value}>{props.value}</span>
      <span className={classes.label}>{props.label}</span>
    </li>
  );
};

export default BannerStats;