import React from 'react';
import classes from './ToggleSideMenu.module.scss';
import ToggleSideMenuIcon from './ToggleSideMenuIcon.png';

const ToggleSideMenu = () => (
    <div className={classes.wrapper}>
      <img src={ToggleSideMenuIcon} alt="ToogleSideMenu" className={classes.toggle} />
    </div>
);

export default ToggleSideMenu;
