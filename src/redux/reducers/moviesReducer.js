import { moviesAPI } from '../../api/moviesApi';

const SET_MOVIE = 'auth/SET_MOVIE';

let initialState = {
  moviesList: [],
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIE:
      return {
        ...state,
        moviesList: action.movies,
      };
    default:
      return state;
  }
};

export const setMovieData = (movies) => ({
  type: SET_MOVIE,
  movies,
});

export const getMovie = () => async (dispatch) => {
  const response = await moviesAPI.getMovies();
  dispatch(
    setMovieData(response)
  );
};

export default moviesReducer;
