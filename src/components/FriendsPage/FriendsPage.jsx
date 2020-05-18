import React from 'react';
import classes from './FriendsPage.module.scss';
import HeaderContainer from '../common/Header/HeaderContainer';
import LeftMenuContainer from '../common/LeftMenu/LeftMenuContainer';
import RightMenuContainer from '../common/RightMenu/RightMenuContainer';
import FriendsContainer from './Friends/FriendsContainer';
import Sorting from './Sorting/Sorting';
import BannerBigContainer from '../common/BannerBig/BannerBigContainer';
import TitleContainer from './Title/TitleContainer';
import InnerMenuContainer from '../common/InnerMenu/InnerMenuContainer';

const FriendsPage = (props) => (
  <div className={classes.wrapper}>
    <HeaderContainer />
    <LeftMenuContainer />
    <RightMenuContainer />
    <div className={classes.block}>
      <BannerBigContainer />
      <InnerMenuContainer />
      <TitleContainer />
      <Sorting />
      <FriendsContainer />
    </div>
  </div>
);

export default FriendsPage;
