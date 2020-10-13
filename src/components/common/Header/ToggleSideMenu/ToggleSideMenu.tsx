import React from 'react';
import classes from './ToggleSideMenu.module.scss';
import ToggleSideMenuIcon from '../../../../assets/Header/ToggleSideMenuIcon.png';

const ToggleSideMenu = () => (
  <>
    <img
      src={ToggleSideMenuIcon}
      alt="ToogleSideMenu"
      className={classes.toggle}
    />
  </>
);

export default ToggleSideMenu;
