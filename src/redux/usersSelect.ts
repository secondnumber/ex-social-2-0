import { createSelector } from 'reselect';
import {AppStateType} from "./reduxStore";

const getUsers = (state: AppStateType) => state.users;

export const getUsersSelector = createSelector(getUsers, (users) => {
  return users;
});
