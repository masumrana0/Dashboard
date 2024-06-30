import { IConversation } from "@/interface/chat";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IChatSlice {
  conversation: IConversation | null;
  isOpenMessage: boolean;
}

const initialState: IChatSlice = {
  conversation: null,
  isOpenMessage: false,
};

const chatSlice = createSlice({
  name: "chatSlice",
  initialState,
  reducers: {
    setConversation(state, action: PayloadAction<IConversation>) {
      state.conversation = action.payload;
    },
    setOpenMessage(state, action: PayloadAction<boolean>) {
      state.isOpenMessage = action.payload;
    },
  },
});

export const { setConversation,setOpenMessage } = chatSlice.actions;
export default chatSlice.reducer;
