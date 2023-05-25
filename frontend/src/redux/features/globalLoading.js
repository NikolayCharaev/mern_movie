import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
};

export const globalLoadingSlice = createSlice({
  name: 'globalLoading',
  initialState,
  reducers: {
    setGlobalLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});



export const {setGlobalLoading} = globalLoadingSlice.actions
export const globalLoading = globalLoadingSlice.reducer;
