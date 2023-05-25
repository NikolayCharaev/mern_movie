import { configureStore } from '@reduxjs/toolkit';
import { globalLoading } from './features/globalLoading';
import { infoMovie } from './features/movieInfo';
import { topMovies } from './features/moviesTop';

export const store = configureStore({
  reducer: {
    allMovies: topMovies,
    movieInfo: infoMovie,
    globalLoading : globalLoading
  },
});
