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
          to="/account/profile_info"
        >
          Profile Info
        </NavLink>
      </li>
      <li>
        <NavLink
          className={classes.link}
          activeClassName={classes.active}
          to="/account/social_and_stream"
        >
          Social and Stream
        </NavLink>
      </li>
      <li>
        <NavLink
          className={classes.link}
          activeClassName={classes.active}
          to="/account/notifications"
        >
          Notifications
        </NavLink>
      </li>
      <li>
        <NavLink
          className={classes.link}
          activeClassName={classes.active}
          to="/account/messages"
        >
          Messages
        </NavLink>
      </li>
      <li>
        <NavLink
          className={classes.link}
          activeClassName={classes.active}
          to="/account/friend_requests"
        >
          Friend Requests
        </NavLink>
      </li>
    </ul>
  );
};

export default ProfileMenu;
