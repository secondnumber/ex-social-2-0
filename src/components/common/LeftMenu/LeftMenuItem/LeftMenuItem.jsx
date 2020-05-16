import React from 'react';
import classes from './LeftMenuItem.module.scss';

const LeftMenuItem = (props) => (
  <li className={classes.item}>
    <a href="#">
      <img src={props.menuIcon} alt="" />
    </a>
  </li>
);

export default LeftMenuItem;
