import React from 'react';
import classes from './MoviesPage.module.scss';
import HeaderContainer from '../common/Header/HeaderContainer';
import LeftMenuContainer from '../common/LeftMenu/LeftMenuContainer';
import RightMenuContainer from '../common/RightMenu/RightMenuContainer';
import BannerBigContainer from '../common/BannerBig/BannerBigContainer';
import InnerMenuContainer from '../common/InnerMenu/InnerMenuContainer';
import TitleContainer from '../common/Title/TitleContainer';
import MoviesAllContainer from './MoviesAll/MoviesAllContainer';
import MoviesFavouriteContainer from './MoviesFavourite/MoviesFavouriteContainer';
import MoviesFilterContainer from './MoviesFilter/MoviesFilterContainer';

const MoviesPage = (props) => {
  return (
    <div className={classes.wrapper}>
      <HeaderContainer />
      <LeftMenuContainer />
      <RightMenuContainer />
      <div className={classes.block}>
        <BannerBigContainer />
        <InnerMenuContainer />
        <TitleContainer name={'Favourite movies'} />
        <div className={classes.content}>
          <MoviesFavouriteContainer />
        </div>
        <TitleContainer name={'All movies'} />
        <div className={classes.content}>
          <MoviesFilterContainer />
          <MoviesAllContainer />
        </div>
      </div>
    </div>
  );
};
export default MoviesPage;
