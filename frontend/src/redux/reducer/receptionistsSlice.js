// receptionistsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  receptionists: [],
  loading: false,
  error: null,
};

export const receptionistsSlice = createSlice({
  name: 'receptionists',
  initialState,
  reducers: {
    fetchReceptionistsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchReceptionistsSuccess(state, action) {
      state.loading = false;
      state.receptionists = action.payload;
    },
    fetchReceptionistsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchReceptionistsStart,
  fetchReceptionistsSuccess,
  fetchReceptionistsFailure,
} = receptionistsSlice.actions;

export default receptionistsSlice.reducer;
