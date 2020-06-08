import React from 'react';
import LoginPage from './components/LoginPage/LoginPage';
import FriendsPage from './components/FriendsPage/FriendsPage';
import { Switch, Route } from 'react-router-dom';
import AccountHubPage from './components/AccountHubPage/AccountHubPage';
import ProfilePageContainer from './components/ProfilePage/ProfilePageContainer';

const App = (props) => (
  <Switch>
    <Route path="/friends">
      <FriendsPage />
    </Route>
    <Route path="/account">
      <AccountHubPage />
    </Route>
    <Route path="/profile/:userId?">
      <ProfilePageContainer />
    </Route>
  </Switch>
);

export default App;
