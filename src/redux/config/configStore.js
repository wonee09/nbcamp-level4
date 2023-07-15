import { configureStore } from "@reduxjs/toolkit";

import diary from "../modules/diarySlice";

const isDev = process.env.NODE_ENV === "development"; //환경변수(process.env).NODE_ENV의 환경이 "development"라면, isDev가 true가 될 것.

const store = configureStore({
  reducer: {
    diary,
  },
  devTools: isDev,
});

export default store;
