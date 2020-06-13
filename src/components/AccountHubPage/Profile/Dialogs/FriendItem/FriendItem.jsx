import React from 'react';
import classes from './FriendItem.module.scss';
import { NavLink } from 'react-router-dom';
import SmallProfileImg from './SmallProfileInfo.png';

const FriendItem = (props) => {
  let path = '/dialogs/' + props.id;
  return (
    <li className={classes.friendItem + ' ' + classes.active}>
      <img className={classes.image} src={SmallProfileImg} />
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
