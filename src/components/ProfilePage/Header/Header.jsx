import React from 'react';
import classes from './Header.module.scss';
import Logo from './Logo/Logo';
import ToggleSideMenu from './ToggleSideMenu/ToggleSideMenu';
import NavMenu from './NavMenu/NavMenu';
import Search from './Search/Search';
import Progress from './Progress/Progress';
import Actions from './Actions/Actions';
import Settings from './Settings/Settings';

const Header = (props) => {
  let navMenuList = props.headerData.navMenuList.map((element) => (
    <NavMenu navMenuItem={element.name} />
  ));

  let progress = props.headerData.progressCount.map((element) => (
    <Progress progressCount={element.experience} />
  ));

  return (
    <div className={classes.header}>
      <Logo />
      <ToggleSideMenu />
      {navMenuList}
      <Search />
      {progress}
      <Actions />
      <Settings />
    </div>
  );
};

export default Header;
