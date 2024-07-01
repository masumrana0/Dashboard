import { getFromLocalStorage } from "@/utils/local-storage";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ILayoutSlice {
  isOpenSideBar: boolean;
  layoutState: boolean;
  isOpenLayoutSidbar: boolean;
}

const layoutStateFromLocalStorage = localStorage.getItem("layoutState") as
  | boolean
  | null;

const initialState: ILayoutSlice = {
  isOpenSideBar: false,
  layoutState: layoutStateFromLocalStorage || false, //if layout's state false then it's will be vertical otherise it's will be Hozizontal

  isOpenLayoutSidbar: false,
};

const layoutSlice = createSlice({
  name: "layoutSlice",
  initialState,
  reducers: {
    setOpenSidebar(state) {
      state.isOpenSideBar = !state.isOpenSideBar;
    },
    toggleLayoutSidebar(state, action: PayloadAction<boolean>) {
      state.isOpenLayoutSidbar = action.payload;
    },
    setLayoutState(state, action: PayloadAction<boolean>) {
      state.layoutState = action.payload;
    },

    sidebarToggle(state) {
      state.isOpenSideBar = !state.isOpenSideBar;
    },
  },
});

export const {
  setOpenSidebar,
  sidebarToggle,
  toggleLayoutSidebar,
  setLayoutState,
} = layoutSlice.actions;
export default layoutSlice.reducer;
