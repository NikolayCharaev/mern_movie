import { configureStore } from '@reduxjs/toolkit';
import { globalLoading } from './features/globalLoading';
import { infoMovie } from './features/movieInfo';
import { topMovies } from './features/moviesTop';
import { actorInfoSlice } from './features/oneActor';
import { searchFilmSlice } from './features/searchFilm';
import { userSlice } from './user/auth';
export const store = configureStore({
  reducer: {
    allMovies: topMovies,
    movieInfo: infoMovie,
    globalLoading: globalLoading,
    actorInfo: actorInfoSlice,
    searchFilm: searchFilmSlice,
    userSlice: userSlice,
  },
});
