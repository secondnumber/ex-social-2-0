import React from 'react';
import { Route, Switch } from 'react-router-dom';
import classes from './Account.module.scss';
import ProfileBanner from './ProfileBanner/ProfileBanner';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import SocialStream from './SocialStream/SocialStream';
import Notifications from './Notifications/Notifications';
import FriendRequests from './FriendRequests/FriendRequests';
import AccountInfo from './AccountInfo/AccountInfo';
import TimelineContainer from '../../TimelinePage/Timeline/TimelineContainer';
import DialogsContainer from './Dialogs/DialogsContainer';
import {AccountInfoListType} from "../../../types";

type PropsType = {
  accountInfoList: Array<AccountInfoListType>
}
const Profile: React.FC<PropsType> = ({ accountInfoList }) => {
  let accountList = accountInfoList.map((element) => (
    <AccountInfo
      key={element.id}
      id={element.id}
      name={element.name}
      description={element.description}
      profileMenuList={element.profileMenuList}
    />
  ));

  return (
    <Switch>
      <div className={classes.wrapper}>
        <ProfileBanner />
        <ul className={classes.list}>{accountList}</ul>
        <Route path="/timeline">
          <TimelineContainer />
        </Route>
        <Route path="/account/profile_info">
          <ProfileInfo />
        </Route>
        <Route path="/account/social_and_stream">
          <SocialStream />
        </Route>
        <Route path="/account/notifications">
          <Notifications />
        </Route>
        <Route path="/account/messages">
          <DialogsContainer />
        </Route>
        <Route path="/account/friend_requests">
          <FriendRequests />
        </Route>
      </div>
    </Switch>
  );
};

export default Profile;
