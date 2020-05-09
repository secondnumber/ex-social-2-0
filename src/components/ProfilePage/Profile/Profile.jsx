import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import classes from './Profile.module.scss';
import ProfileBanner from './ProfileBanner/ProfileBanner';
import ProfileMenu from './AccountInfo/ProfileMenu/ProfileMenu';
import Timeline from './Timeline/Timeline';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Dialogs from './Dialogs/Dialogs';
import SocialStream from './SocialStream/SocialStream';
import Notifications from './Notifications/Notifications';
import FriendRequests from './FriendRequests/FriendRequests';
import AccountInfo from './AccountInfo/AccountInfo';

const Profile = (props) => {
  let accountInfoList = props.accountInfoData.accountInfoList.map((element) => (
    <AccountInfo
      id={element.id}
      name={element.name}
      description={element.description}
      profileMenuList={element.profileMenuList}
    />
  ));

  return (
    <div className={classes.wrapper}>
      <ProfileBanner />
      <ul className={classes.list}>{accountInfoList}</ul>
      <Route
        path="/timeline"
        render={() => (
          <Timeline timeline={props.state.timeline} dispatch={props.dispatch} />
        )}
      />
      <Route path="/profile_info" render={() => <ProfileInfo />} />
      <Route path="/social_and_stream" render={() => <SocialStream />} />
      <Route path="/notifications" render={() => <Notifications />} />
      <Route
        path="/dialogs"
        render={() => (
          <Dialogs messages={props.state.messages} store={props.store} />
        )}
      />
      <Route path="/friend_requests" render={() => <FriendRequests />} />
    </div>
  );
};

export default Profile;
