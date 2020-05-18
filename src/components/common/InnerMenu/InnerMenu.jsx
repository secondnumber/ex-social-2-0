import React from 'react';
import classes from './InnerMenu.module.scss';
import InnerMenuItem from './InnerMenuItem/InnerMenuItem';

const InnerMenu = (props) => {
  let innerMenuList = props.innerMenu.innerMenuList.map((element) => (
    <InnerMenuItem key={element.id} icon={element.icon} />
  ));

  return <ul className={classes.list}>{innerMenuList}</ul>;
};

export default InnerMenu;
