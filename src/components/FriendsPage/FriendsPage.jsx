import React from 'react';
import classes from './FriendsPage.module.scss';
import HeaderContainer from '../common/Header/HeaderContainer';
import LeftMenuContainer from '../common/LeftMenu/LeftMenuContainer';
import RightMenuContainer from '../common/RightMenu/RightMenuContainer';
import FriendsContainer from './Friends/FriendsContainer';

const FriendsPage = (props) => (
  <div className={classes.wrapper}>
    <HeaderContainer />
    <LeftMenuContainer />
    <RightMenuContainer />
    <FriendsContainer />
  </div>
);

export default FriendsPage;
