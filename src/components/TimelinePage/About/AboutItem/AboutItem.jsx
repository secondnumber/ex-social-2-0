import React from 'react';
import classes from './AboutItem.module.scss';

const AboutItem = (props) => {
  return (
    <ul className={classes.column}>
      <li className={classes.option}>{props.option}</li>
      <li className={
          props.option === 'Web'
              ? classes.web
              : classes.value
      }>{props.value}</li>
    </ul>
  );
};
export default AboutItem;
