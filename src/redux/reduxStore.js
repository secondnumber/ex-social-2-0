import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import timelineReducer from './reducers/timelineReducer';
import messagesReducer from './reducers/messagesReducer';
import headersReducer from './reducers/headersReducer';
import accountReducer from './reducers/accountReducer';
import leftMenuReducer from './reducers/leftMenuReducer';
import rightMenuReducer from './reducers/rightMenuReducer';
import bannerReducer from './reducers/bannerReducer';
import usersReducer from './reducers/usersReducer';
import innerMenuReducer from './reducers/innerMenuReducer';
import friendsFilterReducer from './reducers/friendsFilterResucer';
import profileReducer from './reducers/profileReducer';
import authReducer from './reducers/authReducer';
import aboutReducer from './reducers/aboutReducer';
import { reducer as formReducer } from 'redux-form';
import appReducer from './reducers/appReducer';
import moviesReducer from './reducers/moviesReducer';

let reducers = combineReducers({
  headers: headersReducer,
  account: accountReducer,
  leftMenu: leftMenuReducer,
  rightMenu: rightMenuReducer,
  messages: messagesReducer,
  timeline: timelineReducer,
  bannerBig: bannerReducer,
  users: usersReducer,
  innerMenu: innerMenuReducer,
  friendFilter: friendsFilterReducer,
  profile: profileReducer,
  auth: authReducer,
  about: aboutReducer,
  app: appReducer,
  movies: moviesReducer,
  form: formReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

window.store = store;

export default store;
