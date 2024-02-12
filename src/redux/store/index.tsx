import { configureStore } from "@reduxjs/toolkit";
import bagReducer from '../features/bagSlice'
export const store = configureStore({
    reducer: {
        bagRoot: bagReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch