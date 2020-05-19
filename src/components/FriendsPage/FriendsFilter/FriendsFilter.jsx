import React from 'react';
import classes from './FriendsFilter.module.scss';
import FriendsSearch from './FilterSearch/FriendsSearch';

const FriendsFilter = (props) => {
  return (
    <div className={classes.wrapper}>
      <FriendsSearch />
    </div>
  );
};

export default FriendsFilter;