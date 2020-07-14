import React from 'react';
import classes from './MoviesAll.module.scss';
import Movie from '../Movie/Movie';

class MoviesAll extends React.Component {
  componentDidMount() {
    this.props.getMovie();
  }
  render() {
    return (
      <>
        <Movie {...this.props} />
      </>
    );
  }
}

export default MoviesAll;
