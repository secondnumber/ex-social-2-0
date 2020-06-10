import { combineReducers, createStore } from 'redux';
import timelineReducer from './reducers/timelineReducer';
import messagesReducer from './reducers/messagesReducer';
import headersReducer from './reducers/headersReducer';
import accountReducer from './reducers/accountReducer';
import leftMenuReducer from './reducers/leftMenuReducer';
import rightMenuReducer from './reducers/rightMenuReducer';
import bannerBigReducer from './reducers/bannerBigReducer';
import friendsReducer from './reducers/friendsReducer';
import innerMenuReducer from './reducers/innerMenuReducer';
import friendsFilterReducer from './reducers/friendsFilterResucer';
import profileReducer from './reducers/profileReducer';
import authReducer from './reducers/authReducer';

let reducers = combineReducers({
  headers: headersReducer,
  account: accountReducer,
  leftMenu: leftMenuReducer,
  rightMenu: rightMenuReducer,
  messages: messagesReducer,
  timeline: timelineReducer,
  bannerBig: bannerBigReducer,
  friends: friendsReducer,
  innerMenu: innerMenuReducer,
  friendFilter: friendsFilterReducer,
  profile: profileReducer,
  auth: authReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
