import React from 'react';
import classes from './RightMenuItem.module.scss';

const RightMenuItem = (props) => (
  <li className={classes.item}>
    <a href="#">
      <img src={props.menuIcon} alt="" />
    </a>
  </li>
);

export default RightMenuItem;
