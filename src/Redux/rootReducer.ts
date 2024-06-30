import { baseApi } from "./api/baseApi";
import chatReducer from "./slices/chatSlice";
import layoutReducer from "./slices/layoutSlice";
import profileReducer from "./slices/profileSlice";

const rootReducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  profileSlice: profileReducer,
  layoutSlice: layoutReducer,
  chatSlice: chatReducer,
};

export default rootReducer;
