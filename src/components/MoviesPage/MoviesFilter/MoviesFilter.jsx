import React from 'react';
import classes from './MoviesFilter.module.scss';

const MoviesFilter = (props) => {
  return (
    <form className={classes.form}>
      <div className={classes.select}>
        <label className={classes.label} htmlFor="category">
          Category
        </label>
        <select id="category" name="category">
          <option value="0">All Films</option>
          <option value="1">Drama</option>
          <option value="2">Family films</option>
        </select>
      </div>
      <div className={classes.select}>
        <label className={classes.label} htmlFor="sort">
          Sort by
        </label>
        <select id="sort" name="sort">
          <option value="0">All Films</option>
          <option value="1">Drama</option>
          <option value="2">Family films</option>
        </select>
      </div>
      <div className={classes.select}>
        <label className={classes.label} htmlFor="view">
          View
        </label>
        <select id="view" name="view">
          <option value="0">All Films</option>
          <option value="1">Drama</option>
          <option value="2">Family films</option>
        </select>
      </div>
      <button className={classes.button}>Show films</button>
    </form>
  );
};
export default MoviesFilter;
