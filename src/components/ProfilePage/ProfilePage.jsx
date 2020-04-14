import React from 'react';
import classes from './ProfilePage.module.scss';
import Header from './Header/Header/Header';
import LeftMenu from "./LeftMenu/LeftMenu";
import ProfileBanner from "./ProfileBanner/ProfileBanner";

const ProfilePage = () => (
  <div className={classes.wrapper}>
    <Header />
    <LeftMenu/>
    <ProfileBanner/>
  </div>
);

export default ProfilePage;
