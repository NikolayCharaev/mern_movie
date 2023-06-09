import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../../interceptors/UserInterceptor';
// import axios from 'axios';

export const fetchAddComment = createAsyncThunk(
  'comments/fetchAddComment',
  async ({ comment, id }) => {
    axios.post(`/film/${id}`, comment);
    console.log(id);
  },
);

const initialState = {
  allComments: [],
  commentStatus: '',
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  extraReducers: {
    [fetchAddComment.pending]: (state) => {
      state.commentStatus = 'loading';
    },
    [fetchAddComment.fulfilled]: (state) => {
      state.commentStatus = 'loaded';
    },
    [fetchAddComment.rejected]: (state) => {
      state.commentStatus = 'error';
    },
  },
});

export const comments = commentsSlice.reducer;
