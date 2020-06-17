import React from 'react';
import classes from './InnerMenuItem.module.scss';
import { NavLink } from 'react-router-dom';

const InnerMenuItem = (props) => {
  return (
    <li className={classes.item}>
      <NavLink to={props.link}>
        <img src={props.icon} />
      </NavLink>
    </li>
  );
};

export default InnerMenuItem;
