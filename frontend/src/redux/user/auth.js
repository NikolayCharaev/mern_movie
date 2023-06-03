import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../interceptors/UserInterceptor';
import { toast } from 'react-toastify';

export const fetchRegisterUser = createAsyncThunk('/auth/fetchRegister', async (params) => {
  const { data } = await axios.post('/register', params);
  return data;
});

export const fetchAuthUser = createAsyncThunk('auth/fetchAuthUser', async (params) => {
  toast.info('Загрузка...', { autoClose: true }); // Показываем индикатор загрузки

  try {
    const { data } = await axios.post('/login', params);
    toast.dismiss(); // Закрываем toast после успешного ответа
    return data;
  } catch (err) {
    const errorMessage = err.response.data.message;
    toast.error(errorMessage);
    throw err;
  }
});

export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe', async () => {
  const { data } = await axios.get('/me');
  return data;
});

const initialState = {
  user: [],
  status: '',
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
      toast.error('Ошибка при получении данных о пользователе');
      state.user = [];
    },
  },
});

export const { logout } = authSlice.actions;
export const selectIsAuth = (state) => Boolean(state.auth.user);
export const userSlice = authSlice.reducer;
