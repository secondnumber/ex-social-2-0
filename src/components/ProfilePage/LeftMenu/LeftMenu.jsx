import React from 'react';
import classes from './LeftMenu.module.scss';
import LeftMenuItem from './LeftMenuItem/LeftMenuItem';

const LeftMenu = (props) => {
  let leftMenuList = props.state.leftMenu.iconsList.map((element) => (
    <LeftMenuItem menuIcon={element.icon} />
  ));
  return <ul className={classes.list}>{leftMenuList}</ul>;
};

export default LeftMenu;
