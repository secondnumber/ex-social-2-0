import React from 'react';
import classes from './ProfilePage.module.scss';
import Header from './Header/Header';
import LeftMenu from './LeftMenu/LeftMenu';
import RightMenu from './RightMenu/RightMenu';
import ProfileContainer from './Profile/ProfileContainer';

const ProfilePage = (props) => (
  <div className={classes.wrapper}>
    {/*<Header />*/}
    {/*<LeftMenu />*/}
    <ProfileContainer />
    {/*<RightMenu />*/}
  </div>
);

export default ProfilePage;
