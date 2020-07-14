import React from 'react';
import classes from './MoviesAll.module.scss';
import Movie from "../Movie/Movie";

const MoviesAll = (props) => {
  return (
    <ul className={classes.list}>
        <Movie/>
        <Movie/>
        <Movie/>
        <Movie/>
        <Movie/>
        <Movie/>
    </ul>
  );
};
export default MoviesAll;
