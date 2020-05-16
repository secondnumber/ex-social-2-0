import React from 'react';
import classes from './ProfilePage.module.scss';
import ProfileContainer from './Profile/ProfileContainer';
import HeaderContainer from '../common/Header/HeaderContainer';
import LeftMenuContainer from '../common/LeftMenu/LeftMenuContainer';
import RightMenuContainer from '../common/RightMenu/RightMenuContainer';

const ProfilePage = (props) => (
  <div className={classes.wrapper}>
    <HeaderContainer />
    <LeftMenuContainer />
    <ProfileContainer />
    <RightMenuContainer />
  </div>
);

export default ProfilePage;
