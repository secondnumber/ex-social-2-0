import React from 'react';
import classes from './ProfilePage.module.scss';
import HeaderContainer from '../common/Header/HeaderContainer';
import LeftMenuContainer from '../common/LeftMenu/LeftMenuContainer';
import RightMenuContainer from '../common/RightMenu/RightMenuContainer';
import BannerBigContainer from '../common/BannerBig/BannerBigContainer';
import InnerMenuContainer from '../common/InnerMenu/InnerMenuContainer';
import ProfileAbout from './ProfileAbout/ProfileAbout';
import ProfilePosts from './ProfilePosts/ProfilePosts';
import Preloader from '../common/Preloader/Preloader';

const ProfilePage = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={classes.wrapper}>
      <HeaderContainer />
      <LeftMenuContainer />
      <RightMenuContainer />
      <div className={classes.block}>
        <BannerBigContainer />
        <InnerMenuContainer />
        <div className={classes.grid}>
          <div className={classes.left}>
            <ProfileAbout />
          </div>
          <div className={classes.center}>
            <ProfilePosts />
          </div>
          <div className={classes.right}>
            <img src={props.profile.photos.large} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
