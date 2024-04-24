import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  deleting: false,
  success: false,
  error: null,
};

export const deletedTurnSlice = createSlice({
  name: "deletedTurn",
  initialState,
  reducers: {
    deleteTurnStart(state) {
      state.deleting = true;
      state.success = false;
      state.error = null;
    },
    deleteTurnSuccess(state) {
      state.deleting = false;
      state.success = true;
    },
    deleteTurnFailure(state, action) {
      state.deleting = false;
      state.success = false;
      state.error = action.payload;
    },
  },
});

export const {
  deleteTurnStart,
  deleteTurnSuccess,
  deleteTurnFailure,
} = deletedTurnSlice.actions;

export default deletedTurnSlice.reducer;
