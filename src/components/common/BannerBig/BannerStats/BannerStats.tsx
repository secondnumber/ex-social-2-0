import React from 'react';
import classes from './BannerStats.module.scss';

type PropsType = {
    key: number
    value: number
    label: string
}

const BannerStats: React.FC<PropsType> = ( {key, value, label} ) => {
  return (
    <li className={classes.item} key={key}>
      <span className={classes.value}>{value}</span>
      <span className={classes.label}>{label}</span>
    </li>
  );
};

export default BannerStats;