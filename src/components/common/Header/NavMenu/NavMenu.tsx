import React from 'react';
import classes from './NavMenu.module.scss';
import { NavLink } from 'react-router-dom';

type PropsType = {
    key: number
    navMenuItem: string
    navMenuLink: string
}

const NavMenu: React.FC<PropsType> = ({ key, navMenuItem, navMenuLink }) => (
  <ul className={classes.wrapper}>
    <li key={key}>
      <NavLink className={classes.item} to={navMenuLink}>
        {navMenuItem}
      </NavLink>
    </li>
  </ul>
);

export default NavMenu;
