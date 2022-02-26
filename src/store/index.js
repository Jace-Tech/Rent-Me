import { configureStore } from "@reduxjs/toolkit"
import categoryReducer from "./slices/categorySlice"
import userReducer from "./slices/userSlice"
import detailReducer from "./slices/detailSlice"

export const store = configureStore({
    reducer: {
        category: categoryReducer,
        user: userReducer,
        details: detailReducer
    }
})