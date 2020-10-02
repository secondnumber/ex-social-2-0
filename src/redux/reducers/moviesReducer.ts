import { moviesAPI } from '../../api/moviesApi';

const SET_MOVIE = 'auth/SET_MOVIE';

export type InitialStateType = typeof initialState;

let initialState = {
  moviesList: [],
};

const moviesReducer = (state = initialState, action: any): InitialStateType => {
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

type SetMovieDataActionType = {
  type: typeof SET_MOVIE
  movies: Array<object>
}

export const setMovieData = (movies: Array<object>): SetMovieDataActionType => ({
  type: SET_MOVIE,
  movies,
});

export const getMovie = () => async (dispatch: any) => {
  const response = await moviesAPI.getMovies();
  dispatch(
    setMovieData(response)
  );
};

export default moviesReducer;
