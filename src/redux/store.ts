import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import { cartReducer } from "@/redux/feature/cart";
import {movieApi} from "@/redux/services/movieApi";

export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([movieApi.middleware]),
  devTools: process.env.NODE_ENV !== "production",
})