import { configureStore } from '@reduxjs/toolkit';
import { moviesList } from './features/moviesList';

export const store = configureStore({
  reducer: {
    allMovies: moviesList,
  },
});
