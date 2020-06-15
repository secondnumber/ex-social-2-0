import React from 'react';
import classes from './AccountPage.module.scss';
import ProfileContainer from './Profile/AccountContainer';
import HeaderContainer from '../common/Header/HeaderContainer';
import LeftMenuContainer from '../common/LeftMenu/LeftMenuContainer';
import RightMenuContainer from '../common/RightMenu/RightMenuContainer';

const AccountPage = (props) => (
  <div className={classes.wrapper}>
    <HeaderContainer />
    <LeftMenuContainer />
    <ProfileContainer />
    <RightMenuContainer />
  </div>
);

export default AccountPage;
