import React from 'react';
import classes from './Header.module.scss';
import Logo from './Logo/Logo';
import ToggleSideMenu from './ToggleSideMenu/ToggleSideMenu';
import NavMenu from './NavMenu/NavMenu';
import Search from '../Search/Search';
import Progress from './Progress/Progress';
import Actions from './Actions/Actions';
import Settings from './Settings/Settings';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  let navMenuList = props.headers.navMenuList.map((el) => (
    <NavMenu
      key={el.id}
      navMenuItem={el.name}
      navMenuLink={el.link}
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
          <div className={classes.block}>
            <NavLink to={'/account'} className={classes.link}>
              {props.auth.login}
            </NavLink>
            <span onClick={props.logout}>
              <svg
                className={classes.logout}
                height="20px"
                viewBox="0 0 511 512"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
                fill="#8e8aff"
              >
                <path d="m361.5 392v40c0 44.113281-35.886719 80-80 80h-201c-44.113281 0-80-35.886719-80-80v-352c0-44.113281 35.886719-80 80-80h201c44.113281 0 80 35.886719 80 80v40c0 11.046875-8.953125 20-20 20s-20-8.953125-20-20v-40c0-22.054688-17.945312-40-40-40h-201c-22.054688 0-40 17.945312-40 40v352c0 22.054688 17.945312 40 40 40h201c22.054688 0 40-17.945312 40-40v-40c0-11.046875 8.953125-20 20-20s20 8.953125 20 20zm136.355469-170.355469-44.785157-44.785156c-7.8125-7.8125-20.476562-7.8125-28.285156 0-7.8125 7.808594-7.8125 20.472656 0 28.28125l31.855469 31.859375h-240.140625c-11.046875 0-20 8.953125-20 20s8.953125 20 20 20h240.140625l-31.855469 31.859375c-7.8125 7.808594-7.8125 20.472656 0 28.28125 3.90625 3.90625 9.023438 5.859375 14.140625 5.859375 5.121094 0 10.238281-1.953125 14.144531-5.859375l44.785157-44.785156c19.496093-19.496094 19.496093-51.214844 0-70.710938zm0 0" />
              </svg>
            </span>
          </div>
        ) : (
          <NavLink to={'/login'}>Login</NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;
