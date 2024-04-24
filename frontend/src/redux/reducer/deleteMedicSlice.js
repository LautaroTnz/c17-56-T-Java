// deleteMedicSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  deleting: false,
  success: false,
  error: null,
};

export const deleteMedicSlice = createSlice({
  name: "deleteMedic",
  initialState,
  reducers: {
    deleteMedicStart(state) {
      state.deleting = true;
      state.success = false;
      state.error = null;
    },
    deleteMedicSuccess(state) {
      state.deleting = false;
      state.success = true;
    },
    deleteMedicFailure(state, action) {
      state.deleting = false;
      state.success = false;
      state.error = action.payload;
    },
  },
});

export const {
  deleteMedicStart,
  deleteMedicSuccess,
  deleteMedicFailure,
} = deleteMedicSlice.actions;

export default deleteMedicSlice.reducer;
