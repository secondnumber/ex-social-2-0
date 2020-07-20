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

const ProfilePage = ({ profile, isOwner, defaultAvatar, savePhoto }) => {
  return (
    <div className={classes.wrapper}>
      <HeaderContainer />
      <LeftMenuContainer />
      <RightMenuContainer />
      <div className={classes.block}>
        <BannerBigContainer />
        <InnerMenuContainer />
        {!profile ? (
          <Preloader />
        ) : (
          <div className={classes.grid}>
            <div className={classes.info}>
              <ProfileAbout
                savePhoto={savePhoto}
                isOwner={isOwner}
                avatars={profile.photos}
                defaultAvatar={defaultAvatar}
                profile={profile}
              />
            </div>
            <div className={classes.center}>
              <ProfilePosts />
            </div>
            <div className={classes.right}></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
