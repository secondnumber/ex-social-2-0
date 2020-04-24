import React from 'react';
import classes from './ProfileMenu.module.scss';
import { NavLink } from 'react-router-dom';

const ProfileMenu = () => (
  <ul className={classes.list}>
    <li className={classes.item}>
      <h3 className={classes.header}>My Profile</h3>
      <p className={classes.text}>
        Change your avatar and cover, accept friends, read messages and more!
      </p>
      <ul className={classes.listInner}>
        <li>
          <NavLink className={classes.link} activeClassName={classes.active} to="/timeline">
            Timeline
          </NavLink>
        </li>
        <li>
          <NavLink className={classes.link} activeClassName={classes.active} to="/profile_info">
            Profile Info
          </NavLink>
        </li>
        <li>
          <NavLink className={classes.link} activeClassName={classes.active} to="/social_and_stream">
            Social and Stream
          </NavLink>
        </li>
        <li>
          <NavLink className={classes.link} activeClassName={classes.active} to="/notifications">
            Notifications
          </NavLink>
        </li>
        <li>
          <NavLink className={classes.link} activeClassName={classes.active} to="/dialogs">
            Messages
          </NavLink>
        </li>
        <li>
          <NavLink className={classes.link} activeClassName={classes.active} to="/friend_requests">
            Friend Requests
          </NavLink>
        </li>
      </ul>
    </li>
    <li className={classes.item}>
      <h3 className={classes.header}>Account</h3>
      <p className={classes.text}>
        Change settings, configure notifications, and review your privacy
      </p>
    </li>
    <li className={classes.item}>
      <h3 className={classes.header}>Groups</h3>
      <p className={classes.text}>
        Create new groups, manage the ones you created or accept invites!
      </p>
    </li>
    <li className={classes.item}>
      <h3 className={classes.header}>My Store</h3>
      <p className={classes.text}>
        Review your account, manage products check stats and much more!
      </p>
    </li>
  </ul>
);

export default ProfileMenu;
