import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  step: number;
}

const initialState: IInitialState = {
  step: 0,
};

const formStepSlice = createSlice({
  name: "formStepSlice",
  initialState,
  reducers: {
    nextStep(state) {
      state.step = state.step + 1;
    },
    goPreviousStep(state) {
      if (state.step > 0) {
        state.step = state.step - 1;
      }
    },
  },
});

export const { nextStep, goPreviousStep } = formStepSlice.actions;
export default formStepSlice.reducer;
