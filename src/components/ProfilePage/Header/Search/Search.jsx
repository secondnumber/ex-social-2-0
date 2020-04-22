import React from 'react';
import classes from './Search.module.scss';

const Search = () => (
      <div className={classes.wrapper}>
        <input className={classes.input} type="text" placeholder="Search here for people or groups"/>
      </div>
);

export default Search;
