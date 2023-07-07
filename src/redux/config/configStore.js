import { configureStore } from "@reduxjs/toolkit";

import diary from "../modules/diarySlice";

const store = configureStore({
  reducer: {
    diary,
  },
});

export default store;
