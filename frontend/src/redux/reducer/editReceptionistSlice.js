// editReceptionistSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  receptionists: [],
  loading: false,
  error: null,
};

export const editReceptionistSlice = createSlice({
  name: 'editReceptionist',
  initialState,
  reducers: {
    editReceptionistStart(state) {
      state.loading = true;
      state.error = null;
    },
    editReceptionistSuccess(state, action) {
      state.loading = false;
      const updatedReceptionist = action.payload;
      state.receptionists = state.receptionists.map((receptionist) =>
        receptionist.id === updatedReceptionist.id
          ? updatedReceptionist
          : receptionist
      );
    },
    editReceptionistFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  editReceptionistStart,
  editReceptionistSuccess,
  editReceptionistFailure,
} = editReceptionistSlice.actions;

export default editReceptionistSlice.reducer;
