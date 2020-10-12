import React from 'react';
import classes from './FriendItem.module.scss';
import { NavLink } from 'react-router-dom';
import SmallProfileImg from '../../../../../assets/AccountHubPage/SmallProfileInfo.png';

type PropsType = {
    id: number
    name: string
}

const FriendItem: React.FC<PropsType> = ({ id, name }) => {
  let path = '/dialogs/' + id;
  return (
    <li className={classes.friendItem + ' ' + classes.active}>
      <img
        className={classes.image}
        src={SmallProfileImg}
        alt="friend's avatar"
      />
      <NavLink
        className={classes.link}
        activeClassName={classes.active}
        to={path}
      >
        {name}
      </NavLink>
    </li>
  );
};

// @ts-ignore
export default FriendItem;