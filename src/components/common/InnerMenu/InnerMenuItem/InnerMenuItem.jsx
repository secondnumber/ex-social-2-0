import React from 'react';
import classes from './InnerMenuItem.module.scss';

const InnerMenuItem = (props) => {
  return (
    <li className={classes.item}>
      <img src={props.icon} />
    </li>
  );
};

export default InnerMenuItem;