// editDoctorSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  doctors: [],
  loading: false,
  error: null,
};

export const editDoctorSlice = createSlice({
  name: 'editDoctor',
  initialState,
  reducers: {
    editDoctorStart(state) {
      state.loading = true;
      state.error = null;
    },
    editDoctorSuccess(state, action) {
      state.loading = false;
      const updatedDoctor = action.payload;
      // Actualizar el doctor en la lista de doctores
      state.doctors = state.doctors.map(doctor =>
        doctor.id === updatedDoctor.id ? updatedDoctor : doctor
      );
    },
    editDoctorFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  editDoctorStart,
  editDoctorSuccess,
  editDoctorFailure,
} = editDoctorSlice.actions;

export default editDoctorSlice.reducer;
