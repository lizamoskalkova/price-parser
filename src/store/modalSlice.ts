import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Initial {
  isOpen: boolean;
}

const initialState: Initial = {
  isOpen: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});

export default modalSlice.reducer;
export const { setModalOpen } = modalSlice.actions;
