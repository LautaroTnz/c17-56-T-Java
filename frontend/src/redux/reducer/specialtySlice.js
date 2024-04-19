// specialtySlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  especialidades: [],
  loading: false,
  error: null,
};

export const specialtySlice = createSlice({
  name: 'specialty',
  initialState,
  reducers: {
    fetchSpecialtiesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchSpecialtiesSuccess(state, action) {
      state.loading = false;
      state.especialidades = action.payload;
    },
    fetchSpecialtiesFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchSpecialtiesStart, fetchSpecialtiesSuccess, fetchSpecialtiesFailure } = specialtySlice.actions;
export default specialtySlice.reducer;
