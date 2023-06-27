import {configureStore} from "@reduxjs/toolkit";
import {cartReducer} from "@/redux/feature/cart";
import {movieApi} from "@/redux/services/movieApi";
import {reviewApi} from "@/redux/services/reviewApi";
import {cinemaApi} from "@/redux/services/cinemaApi";

export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    [reviewApi.reducerPath]: reviewApi.reducer,
    [cinemaApi.reducerPath]: cinemaApi.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([movieApi.middleware, reviewApi.middleware, cinemaApi.middleware]),
  devTools: process.env.NODE_ENV !== "production",
})