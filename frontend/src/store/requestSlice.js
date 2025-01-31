import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    requests: [],
};

const requestSlice = createSlice({
    name: "request",
    initialState,
    reducers: {
        addRequest: (state, action) => {
            state.requests.push(action.payload);
        },
        removeRequest: (state, action) => {
            state.requests = state.requests.filter(request => request.id !== action.payload);
        },
    },
});

export const { addRequest, removeRequest } = requestSlice.actions;
export default requestSlice.reducer;
