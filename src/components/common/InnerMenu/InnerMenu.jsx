import React from 'react';
import classes from './InnerMenu.module.scss';
import InnerMenuItem from './InnerMenuItem/InnerMenuItem';

const InnerMenu = (props) => {
  let innerMenuList = props.innerMenu.innerMenuList.map((el) => (
    <InnerMenuItem key={el.id} icon={el.icon} link={el.link}/>
  ));

  return <ul className={classes.list}>{innerMenuList}</ul>;
};

export default InnerMenu;
