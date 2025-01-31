import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import donationReducer from "./donationSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        donation: donationReducer,
    },
});

export default store;
