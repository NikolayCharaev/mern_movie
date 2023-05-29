import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../interceptors/UserInterceptor';

export const fetchRegisterUser = createAsyncThunk('/auth/fetchRegister', async (params) => {
  const { data } = await axios.post('/register', params);
  return data
});

const initialState = {
  user: [],
  status: '',
};

export const authSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchRegisterUser.pending] : (state) => { 
        state.user = []
        state.status = 'loading'
    },
    [fetchRegisterUser.fulfilled] : (state, action) => { 
        state.user = action.payload
        state.status = 'loaded'
    },
    [fetchRegisterUser.rejected] : (state) => { 
        state.user = []
        state.status = 'error'
    },
  },
});


export const userSlice = authSlice.reducer