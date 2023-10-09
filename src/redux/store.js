import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./features/tasks/taskSlice";
import userSlice from "./user/userSlice";
import { baseApi } from "./api/baseApi/baseApi";
const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    tasks: taskSlice,
    users: userSlice,
    
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(baseApi.middleware),
  // reducer: {
  //    [baseApi.reducerPath]: baseApi.reducer,
  //  },
});
export default store;
