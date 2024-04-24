import { createSlice } from '@reduxjs/toolkit';

// Estado inicial para turnos
const initialState = {
  turns: [],
  loading: false,
  error: null,
};

const turnSlice = createSlice({
  name: 'turns',
  initialState,
  reducers: {
    fetchTurnsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchTurnsSuccess(state, action) {
      state.loading = false;
      state.turns = action.payload;
    },
    fetchTurnsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchTurnsStart,
  fetchTurnsSuccess,
  fetchTurnsFailure,
} = turnSlice.actions;

export default turnSlice.reducer;
