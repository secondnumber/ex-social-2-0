import React from 'react';
import classes from './ProfileInfo.module.scss';
import ProfileBanner from '../ProfileBanner/ProfileBanner';
import Dialogs from '../Dialogs/Dialogs';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import Timeline from "../Timeline/Timeline";

const ProfileInfo = () => (
  <div className={classes.wrapper}>
    <ProfileBanner />
    <ProfileMenu />
    <Timeline />
  </div>
);

export default ProfileInfo;
