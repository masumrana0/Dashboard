import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ILayoutSlice {
  isOpenSideBar: boolean;
}

const initialState: ILayoutSlice = {
  isOpenSideBar: false,
};

const layoutSlice = createSlice({
  name: "layoutSlice",
  initialState,
  reducers: {
    setOpenSidebar(state) {
      state.isOpenSideBar = !state.isOpenSideBar;
    },
    sidebarToggle(state) {
      state.isOpenSideBar = !state.isOpenSideBar;
    },
  },
});

export const { setOpenSidebar, sidebarToggle } = layoutSlice.actions;
export default layoutSlice.reducer;
