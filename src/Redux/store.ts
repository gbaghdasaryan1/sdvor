import { configureStore } from "@reduxjs/toolkit";
import { basketReduser } from "./BasketSlice";

export const store = configureStore({
  reducer: {
    basket: basketReduser,
  },

  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
});

export type RootState = ReturnType<typeof store.getState>;
