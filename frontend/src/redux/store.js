import { configureStore } from '@reduxjs/toolkit';
import { globalLoading } from './features/globalLoading';
import { infoMovie } from './features/movieInfo';
import { topMovies } from './features/moviesTop';
import { actorInfoSlice } from './features/oneActor';
import { searchFilmSlice } from './features/searchFilm';
export const store = configureStore({
  reducer: {
    allMovies: topMovies,
    movieInfo: infoMovie,
    globalLoading: globalLoading,
    actorInfo: actorInfoSlice,
    searchFilm: searchFilmSlice,
  },
});
