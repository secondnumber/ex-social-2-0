import React from 'react';
import classes from './UsersSearch.module.scss';

const UsersSearch = (props) => {
  return (
    <div className={classes.wrapper}>
      <label className={classes.label} htmlFor="friends-search">
        Search Friends
      </label>
      <input
        className={classes.input}
        type="text"
        id="friends-search"
        placeholder="Search Friends"
      />
      <button className={classes.icon}></button>
    </div>
  );
};

export default UsersSearch;
