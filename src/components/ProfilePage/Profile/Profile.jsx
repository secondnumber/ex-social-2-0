import React from 'react';
import { Route } from 'react-router-dom';
import classes from './Profile.module.scss';
import ProfileBanner from './ProfileBanner/ProfileBanner';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import SocialStream from './SocialStream/SocialStream';
import Notifications from './Notifications/Notifications';
import FriendRequests from './FriendRequests/FriendRequests';
import AccountInfo from './AccountInfo/AccountInfo';
import TimelineContainer from './Timeline/TimelineContainer';
import DialogsContainer from "./Dialogs/DialogsContainer";

const Profile = (props) => {
  let accountInfoList = props.state.account.accountInfoList.map((element) => (
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
        render={() => <TimelineContainer store={props.store} />}
      />
      <Route path="/profile_info" render={() => <ProfileInfo />} />
      <Route path="/social_and_stream" render={() => <SocialStream />} />
      <Route path="/notifications" render={() => <Notifications />} />
      <Route
        path="/dialogs"
        render={() => (
            <DialogsContainer store={props.store} />
        )}
      />
      <Route path="/friend_requests" render={() => <FriendRequests />} />
    </div>
  );
};

export default Profile;
