import { configureStore } from "@reduxjs/toolkit";

import diary from "../modules/diarySlice";

const isDev = process.env.NODE_ENV === "development";

const store = configureStore({
  reducer: {
    diary,
  },
  devTools: isDev,
});

export default store;
