import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import state from "./state";

export const store = configureStore({
    reducer : {
        counter: counterSlice,
        states: state
    }
});