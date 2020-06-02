import React from 'react';
import LoginPage from './components/LoginPage/LoginPage';
import FriendsPage from './components/FriendsPage/FriendsPage';
import { Route } from 'react-router-dom';
import AccountHubPage from './components/AccountHubPage/AccountHubPage';
import ProfilePageContainer from './components/ProfilePage/ProfilePageContainer';

const App = (props) => (
  <div>
    <Route path="/friends" render={() => <FriendsPage />} />
    <Route path="/account" render={() => <AccountHubPage />} />
    <Route path="/profile" render={() => <ProfilePageContainer />} />
  </div>
);

export default App;
