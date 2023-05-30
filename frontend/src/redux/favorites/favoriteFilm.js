import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../interceptors/UserInterceptor';

export const fetchAddFilm = createAsyncThunk('/fetchFavoriteFilm', async (film) => {
  const { data } = await axios.post('/favorite', film);
  return data;
});

export const fetchFavoriteList = createAsyncThunk('/fetchFavoriteList', async () => {
  const { data } = await axios.get('/favorite');
  return data;
});

const initialState = {
  status: '',
  films: [],
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  extraReducers: {
    [fetchAddFilm.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchAddFilm.fulfilled]: (state, action) => {
      state.status = action.payload;
    },
    [fetchAddFilm.rejected]: (state) => {
      state.status = 'error';
    },

    [fetchFavoriteList.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchFavoriteList.fulfilled]: (state, action) => {
      state.status = 'loaded';
      state.films = action.payload;
    },
    [fetchFavoriteList.rejected]: (state) => {
      state.status = 'error';
    },
  },
});

export const favoriteFilms = favoriteSlice.reducer;
