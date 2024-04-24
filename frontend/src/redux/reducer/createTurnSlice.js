// createTurnSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  turn: null,
  loading: false,
  error: null,
};

const createTurnSlice = createSlice({
  name: 'createTurn',
  initialState,
  reducers: {
    createTurnStart(state) {
      state.loading = true;
      state.error = null;
    },
    createTurnSuccess(state, action) {
      state.loading = false;
      state.turn = action.payload;
    },
    createTurnFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { createTurnStart, createTurnSuccess, createTurnFailure } = createTurnSlice.actions;
export default createTurnSlice.reducer;
