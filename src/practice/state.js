import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : '123'
};

export const state = createSlice ({
    name: 'login',
    initialState,
    reducers: {
        change : (state, action)=>{
            state.value = action.payload;
            console.log(state.value);
            console.log(action.payload);
        }
    }
})

export const {change} = state.actions;
export default state.reducer;