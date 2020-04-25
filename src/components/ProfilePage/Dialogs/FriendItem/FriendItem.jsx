import React from 'react';
import classes from './FriendItem.module.scss';
import { NavLink } from 'react-router-dom';

const FriendItem = (props) => {
  let path = '/dialogs/' + props.id;
  return (
    <li className={classes.friendItem + ' ' + classes.active}>
      <NavLink
        className={classes.link}
        activeClassName={classes.active}
        to={path}
      >
        {props.name}
      </NavLink>
    </li>
  );
};

export default FriendItem;
