import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../interceptors/UserInterceptor';

export const fetchRegisterUser = createAsyncThunk('/auth/fetchRegister', async (params) => {
  const { data } = await axios.post('/register', params);
  return data;
});

export const fetchAuthUser = createAsyncThunk('auth/fetchAuthUser', async (params) => {
  const { data } = await axios.post('/login', params);
  return data;
});

export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe', async () => {
  const { data } = await axios.get('/me');
  return data;
});

const initialState = {
  user: [],
  status: [],
};

export const authSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = [];
      window.localStorage.removeItem('token');
    },
  },
  extraReducers: {
    [fetchRegisterUser.pending]: (state) => {
      state.user = [];
      state.status = 'loading';
    },
    [fetchRegisterUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.status = 'loaded';
    },
    [fetchRegisterUser.rejected]: (state) => {
      state.user = [];
      state.status = 'error';
    },

    [fetchAuthUser.pending]: (state) => {
      state.user = [];
      state.status = 'loading';
    },
    [fetchAuthUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.status = 'loaded';
    },
    [fetchAuthUser.rejected]: (state) => {
      state.user = [];
      state.status = 'error';
    },

    [fetchAuthMe.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchAuthMe.fulfilled]: (state, action) => {
      state.status = 'loaded';
      state.user = action.payload;
    },
    [fetchAuthMe.rejected]: (state) => {
      state.status = 'error';
      state.user = [];
    },
  },
});

export const { logout } = authSlice.actions;
export const selectIsAuth = (state) => Boolean(state.auth.user);
export const userSlice = authSlice.reducer;
