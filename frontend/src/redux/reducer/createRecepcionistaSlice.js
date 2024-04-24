// createRecepcionistaSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  recepcionista: null,
  loading: false,
  error: null,
};

export const createRecepcionistaSlice = createSlice({
  name: 'recepcionista',
  initialState,
  reducers: {
    createRecepcionistaStart(state) {
      state.loading = true;
      state.error = null;
    },
    createRecepcionistaSuccess(state, action) {
      state.loading = false;
      state.recepcionista = action.payload;
    },
    createRecepcionistaFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { createRecepcionistaStart, createRecepcionistaSuccess, createRecepcionistaFailure } = createRecepcionistaSlice.actions;
export default createRecepcionistaSlice.reducer;
