import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    donations: [],
};

const donationSlice = createSlice({
    name: "donation",
    initialState,
    reducers: {
        addDonation: (state, action) => {
            state.donations.push(action.payload);
        },
        removeDonation: (state, action) => {
            state.donations = state.donations.filter(donation => donation.id !== action.payload);
        },
    },
});

export const { addDonation, removeDonation } = donationSlice.actions;
export default donationSlice.reducer;
