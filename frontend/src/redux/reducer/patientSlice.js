import { createSlice } from '@reduxjs/toolkit';

// Estado inicial para los pacientes
const initialState = {
  patients: [],
  loading: false,
  error: null,
};

const patientSlice = createSlice({
  name: 'patients',
  initialState,
  reducers: {
    fetchPatientsStart(state) {
      state.loading = true;
      state.error = null;
      
      console.log("fetchPatientsStart - Estado antes:", { ...state });
    },
    fetchPatientsSuccess(state, action) {
      state.loading = false;
      state.patients = action.payload;

      console.log("fetchPatientsSuccess - Estado antes:", { ...state });
    },
    fetchPatientsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;

      console.error("fetchPatientsFailure - Estado antes:", { ...state });
    },
  },
});

export const {
  fetchPatientsStart,
  fetchPatientsSuccess,
  fetchPatientsFailure,
} = patientSlice.actions;

export default patientSlice.reducer;
