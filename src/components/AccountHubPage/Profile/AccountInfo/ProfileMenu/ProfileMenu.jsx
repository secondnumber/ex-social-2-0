import React from 'react';
import classes from './ProfileMenu.module.scss';
import { NavLink } from 'react-router-dom';

const ProfileMenu = (props) => {
  return (
    <ul className={classes.listInner}>
      <li>
        <NavLink
          className={classes.link}
          activeClassName={classes.active}
          to="/timeline"
        >
          Timeline
        </NavLink>
      </li>
      <li>
        <NavLink
          className={classes.link}
          activeClassName={classes.active}
          to="/profile_info"
        >
          Profile Info
        </NavLink>
      </li>
      <li>
        <NavLink
          className={classes.link}
          activeClassName={classes.active}
          to="/social_and_stream"
        >
          Social and Stream
        </NavLink>
      </li>
      <li>
        <NavLink
          className={classes.link}
          activeClassName={classes.active}
          to="/notifications"
        >
          Notifications
        </NavLink>
      </li>
      <li>
        <NavLink
          className={classes.link}
          activeClassName={classes.active}
          to="/dialogs"
        >
          Messages
        </NavLink>
      </li>
      <li>
        <NavLink
          className={classes.link}
          activeClassName={classes.active}
          to="/friend_requests"
        >
          Friend Requests
        </NavLink>
      </li>
    </ul>
  );
};

export default ProfileMenu;
