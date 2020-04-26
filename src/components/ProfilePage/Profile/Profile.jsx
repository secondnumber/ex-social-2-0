import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import classes from './Profile.module.scss';
import ProfileBanner from '../ProfileBanner/ProfileBanner';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import Timeline from './Timeline/Timeline';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import Dialogs from './Dialogs/Dialogs';
import SocialStream from './SocialStream/SocialStream';
import Notifications from './Notifications/Notifications';
import FriendRequests from './FriendRequests/FriendRequests';

const Profile = () => (
  <BrowserRouter>
    <div className={classes.wrapper}>
      <ProfileBanner />
      <ProfileMenu />
      <Route path="/timeline" component={Timeline} />
      <Route path="/profile_info" component={ProfileInfo} />
      <Route path="/social_and_stream" component={SocialStream} />
      <Route path="/notifications" component={Notifications} />
      <Route path="/dialogs" component={Dialogs} />
      <Route path="/friend_requests" component={FriendRequests} />
    </div>
  </BrowserRouter>
);

export default Profile;
