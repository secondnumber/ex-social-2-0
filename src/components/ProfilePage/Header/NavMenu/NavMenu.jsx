import React from 'react';
import classes from './NavMenu.module.scss';

const NavMenu = (props) => (
  <ul className={classes.wrapper}>
    <li>
      <a className={classes.item} href="http://">
          {props.navMenuItem}
      </a>
    </li>
  </ul>
);

export default NavMenu;
