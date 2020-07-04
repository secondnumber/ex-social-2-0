import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import timelineReducer from './reducers/timelineReducer';
import messagesReducer from './reducers/messagesReducer';
import headersReducer from './reducers/headersReducer';
import accountReducer from './reducers/accountReducer';
import leftMenuReducer from './reducers/leftMenuReducer';
import rightMenuReducer from './reducers/rightMenuReducer';
import bannerBigReducer from './reducers/bannerBigReducer';
import usersReducer from './reducers/usersReducer';
import innerMenuReducer from './reducers/innerMenuReducer';
import friendsFilterReducer from './reducers/friendsFilterResucer';
import profileReducer from './reducers/profileReducer';
import authReducer from './reducers/authReducer';
import aboutReducer from './reducers/aboutReducer';
import { reducer as formReducer } from 'redux-form';
import appReducer from './reducers/appReducer';

let reducers = combineReducers({
  headers: headersReducer,
  account: accountReducer,
  leftMenu: leftMenuReducer,
  rightMenu: rightMenuReducer,
  messages: messagesReducer,
  timeline: timelineReducer,
  bannerBig: bannerBigReducer,
  users: usersReducer,
  innerMenu: innerMenuReducer,
  friendFilter: friendsFilterReducer,
  profile: profileReducer,
  auth: authReducer,
  about: aboutReducer,
  app: appReducer,
  form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
