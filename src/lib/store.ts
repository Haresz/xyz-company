import { configureStore } from "@reduxjs/toolkit";

import teamsSlice from "./features/teams/teamsSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      teamsSlice: teamsSlice,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
