import React from 'react';
import classes from './ProfilePage.module.scss';
import Header from './Header/Header';
import LeftMenu from './LeftMenu/LeftMenu';
import Profile from './Profile/Profile';
import RightMenu from './RightMenu/RightMenu';

const ProfilePage = (props) => (
  <div className={classes.wrapper}>
    <Header state={props.state} />
    <LeftMenu state={props.state} />
    <Profile
      dispatch={props.dispatch}
      state={props.state}
      store={props.store}
    />
    <RightMenu state={props.state} />
  </div>
);

export default ProfilePage;
