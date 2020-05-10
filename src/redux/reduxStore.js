import { combineReducers, createStore } from 'redux';
import timelineReducer from './timelineReducer';
import messagesReducer from './messagesReducer';
import headersReducer from './headersReducer';
import accountReducer from './accountReducer';
import leftMenuReducer from './leftMenuReducer';
import rightMenuReducer from './rightMenuReducer';

let reducers = combineReducers({
  headers: headersReducer,
  account: accountReducer,
  leftMenu: leftMenuReducer,
  rightMenu: rightMenuReducer,
  messages: messagesReducer,
  timeline: timelineReducer,
});

let store = createStore(reducers);

export default store;
