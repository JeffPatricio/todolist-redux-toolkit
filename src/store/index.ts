import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./Task.store";
import userReducer from "./User.store";

const store = configureStore({
  reducer: {
    user: userReducer,
    task: taskReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
