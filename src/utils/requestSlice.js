import { createSlice } from "@reduxjs/toolkit";

const request = createSlice({
    name: "request",
    initialState: null,
    reducers: {
        addRequest: (state, action) => {
            return action.payload
        },
        removeRequest:(state, action) => null,
        removeSingleRequest: (state, action) => {
            const newArray = state.filter((req) => req._id !== action.payload)
            return newArray
        }
    }
})

export const { addRequest, removeRequest, removeSingleRequest } = request.actions;
export default request.reducer