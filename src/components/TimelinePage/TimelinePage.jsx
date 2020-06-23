import React from 'react';
import classes from './TimelinePage.module.scss';
import HeaderContainer from '../common/Header/HeaderContainer';
import LeftMenuContainer from '../common/LeftMenu/LeftMenuContainer';
import RightMenuContainer from '../common/RightMenu/RightMenuContainer';
import BannerBigContainer from '../common/BannerBig/BannerBigContainer';
import InnerMenuContainer from '../common/InnerMenu/InnerMenuContainer';
import TitleContainer from '../common/Title/TitleContainer';
import AboutContainer from './About/AboutContainer';
import TimelineContainer from './Timeline/TimelineContainer';

const TimelinePage = (props) => {
  return (
    <div className={classes.wrapper}>
      <HeaderContainer />
      <LeftMenuContainer />
      <RightMenuContainer />
      <div className={classes.block}>
        <BannerBigContainer />
        <InnerMenuContainer />
        <TitleContainer name={'Timeline'} />
        <div className={classes.grid}>
          <div className={classes.column}>
            <AboutContainer />
          </div>
          <div className={classes.column}>
            <TimelineContainer />
          </div>
          <div className={classes.column}>Right</div>
        </div>
      </div>
    </div>
  );
};
export default TimelinePage;
