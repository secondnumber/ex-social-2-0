import * as axios from 'axios';

const instance = axios.create({
  baseURL: `https://api.themoviedb.org/4/list/1`,
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDA5NGExZmVhMzcxZWI2M2EzMGQxYWExZDE4ZGZhZCIsInN1YiI6IjVmMDU3ODVhYmIwNzBkMDAzNDA3MzNiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LYx5cfZemX8XalAWJPn1BdfQCItvGlNFNCC0VcmTSiE',
  },
});

export const moviesAPI = {
  getMovies() {
    return instance.get(``).then((response) => response.data.results);
  },
};
