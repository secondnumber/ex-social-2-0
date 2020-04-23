import React from 'react';
import classes from './NavMenu.module.scss';

const NavMenu = () => (
  <ul className={classes.wrapper}>
    <li>
      <a className={classes.item} href="http://">
        Home
      </a>
    </li>
    <li>
      <a className={classes.item} href="http://">
        Careers
      </a>
    </li>
    <li>
      <a className={classes.item} href="http://">
        Faqs
      </a>
    </li>
    <li>
      <a className={classes.item} href="http://">
        ...
      </a>
    </li>
  </ul>
);

export default NavMenu;
