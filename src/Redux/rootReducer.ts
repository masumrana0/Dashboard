import { baseApi } from "./api/baseApi";
import FormStepReducer from "./slices/FormStepSlice";
import chatReducer from "./slices/chatSlice";
import layoutReducer from "./slices/layoutSlice";
import profileReducer from "./slices/profileSlice";

const rootReducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  profileSlice: profileReducer,
  layoutSlice: layoutReducer,
  chatSlice: chatReducer,
  formStepSlice: FormStepReducer,
};

export default rootReducer;
