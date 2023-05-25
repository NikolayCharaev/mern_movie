import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTopFilms = createAsyncThunk('/fetchTopFilms', async () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const { data } = await axios.get(
    `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1`,
    {
      headers: {
        'X-API-KEY': apiKey,
        'Content-Type': 'application/json',
      },
    },
  );
  const { films } = await data;
  return films;
});

export const fetchTopAwaitFilms = createAsyncThunk('/fetchTopAwaitFilms', async () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const { data } = await axios.get(
    `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_AWAIT_FILMS&page=1`,
    {
      headers: {
        'X-API-KEY': apiKey,
        'Content-Type': 'application/json',
      },
    },
  );
  const { films } = await data;
  return films;
});

export const fetchPopularFilms = createAsyncThunk('/fetchPopularFilms', async () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const { data } = await axios.get(
    `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1`,
    {
      headers: {
        'X-API-KEY': apiKey,
        'Content-Type': 'application/json',
      },
    },
  );
  const { films } = await data;
  return films;
});

const initialState = {
  topFilms: {
    films: [],
    status: '',
    page: 1,
  },
  topAwaitFilms: {
    films: [],
    status: '',
    page: 1,
  },
  topPopularFilms: {
    films: [],
    status: '',
    page: 1,
  },
};

export const MoviesList = createSlice({
  name: 'Movies',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTopFilms.pending]: (state) => {
      state.topFilms.status = 'loading';
    },
    [fetchTopFilms.fulfilled]: (state, action) => {
      state.topFilms.status = 'loaded';
      state.topFilms.films = action.payload;
    },
    [fetchTopFilms.rejected]: (state) => {
      state.topFilms.status = 'error';
      state.topFilms.films = [];
    },

    [fetchTopAwaitFilms.pending]: (state) => {
      state.topAwaitFilms.status = 'loading';
    },
    [fetchTopAwaitFilms.fulfilled]: (state, action) => {
      state.topAwaitFilms.status = 'loaded';
      state.topAwaitFilms.films = action.payload;
    },
    [fetchTopAwaitFilms.rejected]: (state) => {
      state.topAwaitFilms.status = 'error';
      state.topAwaitFilms.films = [];
    },

    [fetchPopularFilms.pending]: (state) => {
      state.topPopularFilms.status = 'loading';
    },
    [fetchPopularFilms.fulfilled]: (state, action) => {
      state.topPopularFilms.status = 'loaded';
      state.topPopularFilms.films = action.payload;
    },
    [fetchPopularFilms.rejected]: (state) => {
      state.topPopularFilms.status = 'error';
      state.topPopularFilms.films = [];
    },
  },
});

export const moviesList = MoviesList.reducer;
