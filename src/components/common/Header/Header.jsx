import React from 'react';
import classes from './Header.module.scss';
import Logo from './Logo/Logo';
import ToggleSideMenu from './ToggleSideMenu/ToggleSideMenu';
import NavMenu from './NavMenu/NavMenu';
import Search from './Search/Search';
import Progress from './Progress/Progress';
import Actions from './Actions/Actions';
import Settings from './Settings/Settings';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  let navMenuList = props.headers.navMenuList.map((element) => (
    <NavMenu
      key={element.id}
      navMenuItem={element.name}
      navMenuLink={element.link}
    />
  ));

  let progress = props.headers.progressCount.map((element) => (
    <Progress key={element.id} progressCount={element.experience} />
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
      <div>
        {props.auth.isAuth ? (
          <NavLink to={'/login'}>Ok</NavLink>
        ) : (
          <NavLink to={'/login'}>Login</NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;
