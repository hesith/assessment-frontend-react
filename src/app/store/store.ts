import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice";
import navigationSlice from "./reducers/navigationSlice";
import sidebarSlice from "./reducers/sidebarSlice";

export const store = configureStore({
    reducer:{
        user: userSlice,
        nav: navigationSlice,
        sidebar: sidebarSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;