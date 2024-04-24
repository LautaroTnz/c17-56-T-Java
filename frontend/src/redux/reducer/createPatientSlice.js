// createPatientSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  patient: null,
  loading: false,
  error: null,
};

export const createPatientSlice = createSlice({
  name: 'createPatient',
  initialState,
  reducers: {
    createPatientStart(state) {
      state.loading = true;
      state.error = null;
    },
    createPatientSuccess(state, action) {
      state.loading = false;
      state.patient = action.payload;
    },
    createPatientFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  createPatientStart,
  createPatientSuccess,
  createPatientFailure,
} = createPatientSlice.actions;

export default createPatientSlice.reducer;
