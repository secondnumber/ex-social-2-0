import React from 'react';
import classes from './Title.module.scss';

const Title = (props) => {
  return (
    <div className={classes.wrapper}>
      <span className={classes.label}>BROWSE MARINA’S</span>
      <span className={classes.title}>{props.name}</span>
    </div>
  );
};

export default Title;
