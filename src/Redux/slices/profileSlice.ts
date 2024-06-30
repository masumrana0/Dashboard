import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IProfileSlice {
  isEditable: boolean;
}

const initialState: IProfileSlice = {
  isEditable: false,
};

const profileSlice = createSlice({
  name: "profileSlice",
  initialState,
  reducers: {
    setEditableProfile(state) {
      state.isEditable = !state.isEditable;
    },
  },
});

export const { setEditableProfile } = profileSlice.actions;
export default profileSlice.reducer;
