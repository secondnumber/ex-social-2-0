import { createSelector } from 'reselect';

const getUsers = (state) => state.users;

export const getUsersSelector = createSelector(getUsers, (users) => {
  return users;
});
