import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../interceptors/MovieInterceptor';

export const fetchActorInfo = createAsyncThunk('actor/FetchActorInfo', async (id) => {
  const { data } = await axios.get(`api/v1/staff/${id}`);
  return data;
});

const initialState = {
  actor: {
    status: '',
    item: [],
  },
};

export const actorInfo = createSlice({
  name: 'actorInfo',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchActorInfo.pending]: (state) => {
      state.actor.status = 'loading';
      state.actor.item = [];
    },
    [fetchActorInfo.fulfilled]: (state, action) => {
      state.actor.status = 'loaded';
      state.actor.item = action.payload;
    },
    [fetchActorInfo.rejected]: (state) => {
      state.actor.status = 'error';
      state.actor.item = [];
    },
  },
});

export const actorInfoSlice = actorInfo.reducer;
