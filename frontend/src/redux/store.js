import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slices/authSlice";
import { apiSlice } from "./Slices/apiSlice.js";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
  devTools: true,
});
