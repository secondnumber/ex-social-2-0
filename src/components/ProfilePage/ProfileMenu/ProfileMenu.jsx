import React from 'react';
import classes from './ProfileMenu.module.scss';

const ProfileMenu = () => (
  <ul className={classes.list}>
    <li className={classes.item}>
      <h3 className={classes.header}>My Profile</h3>
      <p className={classes.text}>
        Change your avatar and cover, accept friends, read messages and more!
      </p>
      <ul className={classes.listInner}>
        <li>
          <a className={classes.link} href="#">
            Timeline
          </a>
        </li>
        <li>
          <a className={classes.link} href="#">
            Profile Info
          </a>
        </li>
        <li>
          <a className={classes.link} href="#">
            Social and Stream
          </a>
        </li>
        <li>
          <a className={classes.link} href="#">
            Notification
          </a>
        </li>
        <li>
          <a className={classes.link} href="#">
            Messages
          </a>
        </li>
        <li>
          <a className={classes.link} href="#">
            Friend Requests
          </a>
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
