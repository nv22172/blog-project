import { configureStore } from "@reduxjs/toolkit";

import { countReducer } from "/workspaces/blog-project/src/store/actions/reducers/countReducers.js";

const store = configureStore({
  reducer: {
    count: countReducer,
  },
});

export default store;