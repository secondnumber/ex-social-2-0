import React from 'react';
import classes from './Movie.module.scss';

const Movie = (props) => {
  let moviesList = props.movies.moviesList.map((el) => (
    <li className={classes.item}>
        <img className={classes.poster} src={`https://image.tmdb.org/t/p/w500${el['poster_path']}`} alt={el.title}/>
    </li>
  ));
  return <ul className={classes.list}>{moviesList}</ul>;
};
export default Movie;
