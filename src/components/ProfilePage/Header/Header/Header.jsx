import React from 'react';
import classes from './Header.module.scss';
import Logo from '../Logo/Logo';
import ToggleSideMenu from '../ToggleSideMenu/ToggleSideMenu';

const Header = () => (
  <div className={classes.header}>
    <Logo />
    <ToggleSideMenu />
      <div>Nav</div>
      <div>NavGroupp</div>
      <div>Search</div>
      <div>Progress</div>
      <div>Actions</div>
      <div>Settings</div>
  </div>
);

export default Header;
