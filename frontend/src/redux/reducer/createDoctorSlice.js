// doctorSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  doctor: null,
  loading: false,
  error: null,
};

export const createDoctoroctorSlice = createSlice({
  name: 'doctor',
  initialState,
  reducers: {
    createDoctorStart(state) {
      state.loading = true;
      state.error = null;
    },
    createDoctorSuccess(state, action) {
      state.loading = false;
      state.doctor = action.payload;
    },
    createDoctorFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { createDoctorStart, createDoctorSuccess, createDoctorFailure } = createDoctoroctorSlice.actions;
export default createDoctoroctorSlice.reducer;