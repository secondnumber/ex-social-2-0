import React from 'react';
import LoginPage from './components/LoginPage/LoginPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import FriendsPage from './components/FriendsPage/FriendsPage';
import { Route } from 'react-router-dom';

const App = (props) => (
  <div>
    <Route path="/friends" render={() => <FriendsPage />} />
    <Route path="/profile" render={() => <ProfilePage />} />
  </div>
);

export default App;
