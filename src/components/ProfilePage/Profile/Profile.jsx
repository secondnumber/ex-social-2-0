import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import classes from './Profile.module.scss';
import ProfileBanner from './ProfileBanner/ProfileBanner';
import ProfileMenu from './ProfileMenu/ProfileMenu';
import Timeline from './Timeline/Timeline';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Dialogs from './Dialogs/Dialogs';
import SocialStream from './SocialStream/SocialStream';
import Notifications from './Notifications/Notifications';
import FriendRequests from './FriendRequests/FriendRequests';

const Profile = (props) => (
  <BrowserRouter>
    <div className={classes.wrapper}>
      <ProfileBanner />
      <ProfileMenu />
      <Route
        path="/timeline"
        render={() => <Timeline timeline={props.state.timeline} />}
      />
      <Route path="/profile_info" render={() => <ProfileInfo />} />
      <Route path="/social_and_stream" render={() => <SocialStream />} />
      <Route path="/notifications" render={() => <Notifications />} />
      <Route
        path="/dialogs"
        render={() => (
          <Dialogs
            messages={props.state.messages}
          />
        )}
      />
      <Route path="/friend_requests" render={() => <FriendRequests />} />
    </div>
  </BrowserRouter>
);

export default Profile;
