import React from 'react';
import classes from './ProfilePage.module.scss';
import Header from './Header/Header/Header';
import LeftMenu from './LeftMenu/LeftMenu';
import Profile from './Profile/Profile';
import RightMenu from './RightMenu/RightMenu';

const ProfilePage = () => (
  <div className={classes.wrapper}>
    <Header />
    <LeftMenu />
    <Profile />
    <RightMenu />
  </div>
);

export default ProfilePage;
