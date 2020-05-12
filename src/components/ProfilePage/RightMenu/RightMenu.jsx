import React from 'react';
import classes from './RightMenu.module.scss';
import RightMenuItem from './RightMenuItem/RightMenuItem';

const RightMenu = (props) => {
  let rightMenuList = props.state.rightMenu.iconsList.map((element) => (
    <RightMenuItem menuIcon={element.icon} />
  ));
  return <ul className={classes.list}>{rightMenuList}</ul>;
};

export default RightMenu;
