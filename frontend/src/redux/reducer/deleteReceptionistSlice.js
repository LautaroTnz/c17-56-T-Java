// deleteReceptionistSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  deleting: false,
  success: false,
  error: null,
};

export const deleteReceptionistSlice = createSlice({
  name: 'deleteReceptionist',
  initialState,
  reducers: {
    deleteReceptionistStart(state) {
      state.deleting = true;
      state.success = false;
      state.error = null;
    },
    deleteReceptionistSuccess(state) {
      state.deleting = false;
      state.success = true;
    },
    deleteReceptionistFailure(state, action) {
      state.deleting = false;
      state.success = false;
      state.error = action.payload;
    },
  },
});

export const {
  deleteReceptionistStart,
  deleteReceptionistSuccess,
  deleteReceptionistFailure,
} = deleteReceptionistSlice.actions;

export default deleteReceptionistSlice.reducer;
