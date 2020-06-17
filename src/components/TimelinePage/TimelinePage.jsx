import React from 'react';
import classes from './TimelinePage.module.scss';
import HeaderContainer from '../common/Header/HeaderContainer';
import LeftMenuContainer from '../common/LeftMenu/LeftMenuContainer';
import RightMenuContainer from '../common/RightMenu/RightMenuContainer';
import BannerBigContainer from '../common/BannerBig/BannerBigContainer';
import InnerMenuContainer from '../common/InnerMenu/InnerMenuContainer';

const TimelinePage = (props) => (
  <div className={classes.wrapper}>
    <HeaderContainer />
    <LeftMenuContainer />
    <RightMenuContainer />
      <div className={classes.block}>
    <BannerBigContainer />
    <InnerMenuContainer />
    <div>Timelime</div>
      </div>
  </div>
);

export default TimelinePage;
