import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchSearchFilms = createAsyncThunk('/films/fetchSearchFilms', async (params) => {
  const { data } = await axios.get(`api/v2.1/films/search-by-keyword?keyword=${params}&page=1`);
  return data.films;
});

const initialState = {
  items: [],
  status: '',
};

export const searchFilm = createSlice({
  name: 'search',
  initialState,
  extraReducers: {
    [fetchSearchFilms.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchSearchFilms.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'loaded';
    },
    [fetchSearchFilms.rejected]: (state) => {
      state.items = [];
      state.status = 'error';
    },
  },
});

export const searchFilmSlice = searchFilm.reducer;
