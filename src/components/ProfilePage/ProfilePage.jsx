import React from 'react';
import classes from './ProfilePage.module.scss';
import ProfileContainer from './Profile/ProfileContainer';
import HeaderContainer from './Header/HeaderContainer';
import LeftMenuContainer from './LeftMenu/LeftMenuContainer';
import RightMenuContainer from './RightMenu/RightMenuContainer';

const ProfilePage = (props) => (
  <div className={classes.wrapper}>
    <HeaderContainer />
    <LeftMenuContainer />
    <ProfileContainer />
    <RightMenuContainer />
  </div>
);

export default ProfilePage;
