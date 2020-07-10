import React from 'react';
import classes from './NavMenu.module.scss';
import { NavLink } from 'react-router-dom';

const NavMenu = (props) => (
  <ul className={classes.wrapper}>
    <li>
      <NavLink className={classes.item} to={props.navMenuLink}>
        {props.navMenuItem}
      </NavLink>
    </li>
  </ul>
);

export default NavMenu;
