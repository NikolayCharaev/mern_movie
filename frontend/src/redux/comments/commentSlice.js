import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../../interceptors/UserInterceptor';
// import axios from 'axios';

export const fetchAddComment = createAsyncThunk(
  'comments/fetchAddComment',
  async ({ comment, id }) => {
    try {
      await axios.post(`/film/${id}`, { text: comment });
      console.log(id);
    } catch (error) {
      console.error('Error adding comment:', error);
      throw error;
    }
  },
);

export const fetchAllComments = createAsyncThunk('/comments/fetchAllComments', async ( id ) => {
  try {
    const {data} = await axios.get(`/film/${id}`);
    return data
  } catch (error) {
    console.error('Error adding comment:', error);
    throw error;
  }
});

const initialState = {
  newCommentStatus: '',
  allComments: {
    items: [],
    status: '',
  },
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  extraReducers: {
    [fetchAddComment.pending]: (state) => {
      state.newCommentStatus = 'loading';
    },
    [fetchAddComment.fulfilled]: (state) => {
      state.newCommentStatus = 'loaded';
    },
    [fetchAddComment.rejected]: (state) => {
      state.newCommentStatus = 'error';
    },

    [fetchAllComments.pending]: (state) => {
      state.allComments.status = 'loading';
    },

    [fetchAllComments.fulfilled]: (state, action) => {
      (state.allComments.status = 'loaded'), (state.allComments.items = action.payload);
    },

    [fetchAllComments.rejected]: (state) => {
      (state.allComments.status = 'error'), (state.allComments.items = []);
    },
  },
});

export const comments = commentsSlice.reducer;
