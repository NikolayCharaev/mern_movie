import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../interceptors/UserInterceptor';
import { toast } from 'react-toastify';

export const fetchAddFilm = createAsyncThunk('/fetchFavoriteFilm', async (film) => {
  const { data } = await axios.post('/favorite', film).then(toast.success('фильм добавлен в избранное'));
  return data;
});

export const fetchFavoriteList = createAsyncThunk('/fetchFavoriteList', async () => {
  const { data } = await axios.get('/favorite');
  return data;
});

export const fetchRemoveFilm = createAsyncThunk('/fetchRemoveFilm', async (id) => {
  const { data } = await axios.delete(`/favorite/${id}`).then(toast.success('фильм удален'));
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
      state.isAdding = false;
    },
    [fetchAddFilm.fulfilled]: (state, action) => {
      state.status = action.payload;
      state.isAdding = true;
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

    [fetchRemoveFilm.pending]: (state, action) => {
      state.films = state.films.filter((film) => film._id !== action.meta.arg);
    },
  },
});

export const favoriteFilms = favoriteSlice.reducer;
