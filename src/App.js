import React from 'react';
import LoginPage from './components/LoginPage/LoginPage';
import ProfilePage from './components/ProfilePage/ProfilePage';

const App = (props) => (
  <div>
    <ProfilePage postsData={props.postsData} friendsData={props.friendsData} messagesData={props.messagesData}/>
  </div>
);

export default App;
