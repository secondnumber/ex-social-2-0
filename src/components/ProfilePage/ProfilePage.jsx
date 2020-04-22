import React from 'react';
import classes from './ProfilePage.module.scss';
import Header from './Header/Header/Header';
import LeftMenu from "./LeftMenu/LeftMenu";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import RightMenu from './RightMenu/RightMenu';

const ProfilePage = () => (
  <div className={classes.wrapper}>
    <Header />
    <LeftMenu/>
    <ProfileInfo />
    <RightMenu />
  </div>
);

export default ProfilePage;
