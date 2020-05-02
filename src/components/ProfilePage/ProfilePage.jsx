import React from 'react';
import classes from './ProfilePage.module.scss';
import Header from './Header/Header';
import LeftMenu from './LeftMenu/LeftMenu';
import Profile from './Profile/Profile';
import RightMenu from './RightMenu/RightMenu';

const ProfilePage = (props) => (
  <div className={classes.wrapper}>
    <Header headerData={props.state.headerData} />
    <LeftMenu menusData={props.menusData} />
    <Profile state={props.state} addPost={props.state.addPost} />
    <RightMenu />
  </div>
);

export default ProfilePage;
