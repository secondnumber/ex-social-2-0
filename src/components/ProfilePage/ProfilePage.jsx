import React from 'react';
import classes from './ProfilePage.module.scss';
import Header from './Header/Header';
import LeftMenu from './LeftMenu/LeftMenu';
import Profile from './Profile/Profile';
import RightMenu from './RightMenu/RightMenu';

const ProfilePage = (props) => (
  <div className={classes.wrapper}>
    <Header headerData={props.state.headerData} />
    <LeftMenu leftMenuData={props.state.leftMenuData} />
    <Profile
      state={props.state}
      addPost={props.addPost}
      updateNewPostText={props.updateNewPostText}
      accountInfoData={props.state.accountInfoData}
    />
    <RightMenu rightMenuData={props.state.rightMenuData} />
  </div>
);

export default ProfilePage;
