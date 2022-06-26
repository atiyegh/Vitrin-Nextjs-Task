import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./postsSlice";
import { createWrapper } from "next-redux-wrapper"

const Store = ()=> configureStore({
    reducer: {
        posts: postsReducer,
    }
})

export const wrapper = createWrapper(Store)
