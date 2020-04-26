import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postsData = [
  {
    id: 1,
    author: 'Marina Valentine',
    time: '29 minutes ago',
    message:
      'Hi to all! Remembercomments that today I\'ll be livestreaming along with @NekoBebop the new character of the brand new Xenowatch patch "Anya Darkness". See you there!',
    reactions: 15,
    comments: 1,
    shares: 1,
  },
  {
    id: 2,
    author: 'Marina Valentine',
    time: '17 hours ago',
    message: 'This is a dream come true, thanks to all for the support!!!',
    reactions: 21,
    comments: 4,
    shares: 3,
  },
  {
    id: 3,
    author: 'Marina Valentine',
    time: '2 days ago',
    message:
      "Here's a sneak peek of the official box cover art for Machine Wasteland II! Remember that I'll be having a stream showing a preview tommorrow at 9PM PCT!",
    reactions: 9,
    comments: 0,
    shares: 0,
  },
];

let friendsData = [
  { id: 1, name: 'Bearded Wonder' },
  { id: 2, name: 'Neko Bebop' },
  { id: 3, name: 'Nick Grissom' },
  { id: 4, name: 'Sarah Diamond' },
  { id: 5, name: 'Matt Parker' },
];

let messagesData = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'Hello' },
  { id: 3, message: 'How are you?' },
];

ReactDOM.render(<App postsData={postsData} friendsData={friendsData} messagesData={messagesData} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
