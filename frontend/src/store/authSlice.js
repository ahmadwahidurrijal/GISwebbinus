import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null, // User yang login
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload; // Simpan data user
        },
        logout: (state) => {
            state.user = null; // Hapus user dari state
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
