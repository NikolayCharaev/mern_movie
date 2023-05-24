import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTopFilms = createAsyncThunk('/fetchTopFilms', async () => {
  const { data } = axios.get(
    `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1`,
    {
      headers: {
        'X-API-KEY': process.env.API_KEY,
      },
    },
  );
  return data;
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
      state.topFilms.status = 'loading';
      state.topFilms.films = action.payload;
    },
    [fetchTopFilms.rejected]: (state) => {
      state.topFilms.status = 'error';
      state.topFilms.films = [];
    },
  },
});


export const moviesList = MoviesList.reducer;