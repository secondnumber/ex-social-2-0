import React from 'react';
import LoginPage from './components/LoginPage/LoginPage';
import FriendsPage from './components/FriendsPage/FriendsPage';
import { Switch, Route } from 'react-router-dom';
import ProfilePageContainer from './components/ProfilePage/ProfilePageContainer';
import AccountPageContainer from './components/AccountHubPage/AccountPageContainer';
import TimelinePageContainer from './components/TimelinePage/TimelinePageContainer';

const App = (props) => (
  <Switch>
    <Route exact path="/">
      <LoginPage />
    </Route>
    <Route exact path="/timeline">
      <TimelinePageContainer />
    </Route>
    <Route path="/friends">
      <FriendsPage />
    </Route>
    <Route exact path="/account">
      <AccountPageContainer />
    </Route>
    <Route path="/profile/:userId?">
      <ProfilePageContainer />
    </Route>
  </Switch>
);

export default App;
