import {configureStore } from "@reduxjs/toolkit"
import store_redux_slice from "../js/store_redux_slice"

export const store_redux = configureStore ({
    reducer: {
        counter: store_redux_slice,
    },
})