// doctorSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  doctors: [],
  loading: false,
  error: null,
};

export const doctorSlice = createSlice({
  name: 'doctor',
  initialState,
  reducers: {
    fetchDoctorsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchDoctorsSuccess(state, action) {
      state.loading = false;
      state.doctors = action.payload;
    },
    fetchDoctorsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchDoctorsStart, fetchDoctorsSuccess, fetchDoctorsFailure } = doctorSlice.actions;
export default doctorSlice.reducer;
