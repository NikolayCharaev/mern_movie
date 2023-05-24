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

const initialState = {
  topFilms: {
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
  },
});

export const moviesList = MoviesList.reducer;
