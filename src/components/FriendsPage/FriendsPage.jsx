import React from 'react';
import classes from './FriendsPage.module.scss';
import HeaderContainer from '../common/Header/HeaderContainer';
import LeftMenuContainer from '../common/LeftMenu/LeftMenuContainer';
import RightMenuContainer from '../common/RightMenu/RightMenuContainer';
import FriendsContainer from './Friends/FriendsContainer';
import InnerMenu from '../common/InnerMenu/InnerMenu';
import Title from './Title/Title';
import Sorting from './Sorting/Sorting';
import BannerBigContainer from '../common/BannerBig/BannerBigContainer';

const FriendsPage = (props) => (
  <div className={classes.wrapper}>
    <HeaderContainer />
    <LeftMenuContainer />
    <RightMenuContainer />
    <div className={classes.block}>
      <BannerBigContainer />
      <InnerMenu />
      <Title />
      <Sorting />
      <FriendsContainer />
    </div>
  </div>
);

export default FriendsPage;
