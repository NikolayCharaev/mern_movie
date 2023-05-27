import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchMovieData = createAsyncThunk('/fetchMovieData', async (id) => {
  const { data } = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`);
  return data;
});

export const fetchMoviePosters = createAsyncThunk('/fetchMoviePosters', async (id) => {
  const { data } = await axios.get(`api/v2.2/films/${id}/images?type=STILL&page=1`);
  return data.items.map((elem) => elem.imageUrl);
});

export const fetchMovieActors = createAsyncThunk('/fetchMovieActors', async (id) => {
  const { data } = await axios.get(`api/v1/staff?filmId=${id}`);
  return data.filter((elem) => elem.professionText === 'Актеры');
});

export const fetchMovieVideos = createAsyncThunk('/fetchMovieVideos', async (id) => {
  const { data } = await axios.get(`api/v2.2/films/${id}/videos`);
  return data.items.filter(item => item.site === 'YOUTUBE');
});

const initialState = {
  movieData: {
    film: [],
    posters: [],
    status: '',
    actors: [],
    videos: []
  },
};

export const movieInfo = createSlice({
  name: 'MovieInfo',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMovieData.pending]: (state) => {
      state.movieData.film = [];
      state.movieData.status = 'loading';
    },
    [fetchMovieData.fulfilled]: (state, action) => {
      state.movieData.film = action.payload;
      state.movieData.status = 'loaded';
    },
    [fetchMovieData.rejected]: (state) => {
      state.movieData.film = [];
      state.movieData.status = 'error';
    },

    [fetchMoviePosters.pending]: (state) => {
      state.movieData.posters = [];
      state.movieData.status = 'loading';
    },
    [fetchMoviePosters.fulfilled]: (state, action) => {
      state.movieData.posters = action.payload;
      state.movieData.status = 'loaded';
    },
    [fetchMoviePosters.rejected]: (state) => {
      state.movieData.posters = [];
      state.movieData.status = 'error';
    },

    [fetchMovieActors.pending]: (state) => {
      state.movieData.actors = [];
      state.movieData.status = 'loading';
    },
    [fetchMovieActors.fulfilled]: (state, action) => {
      state.movieData.actors = action.payload;
      state.movieData.status = 'loaded';
    },
    [fetchMovieActors.rejected]: (state) => {
      state.movieData.actors = [];
      state.movieData.status = 'error';
    },

    [fetchMovieVideos.pending]: (state) => {
      state.movieData.videos = [];
      state.movieData.status = 'loading';
    },
    [fetchMovieVideos.fulfilled]: (state, action) => {
      state.movieData.videos = action.payload;
      state.movieData.status = 'loaded';
    },
    [fetchMovieVideos.rejected]: (state) => {
      state.movieData.videos = [];
      state.movieData.status = 'error';
    },
  },
});

export const infoMovie = movieInfo.reducer;
