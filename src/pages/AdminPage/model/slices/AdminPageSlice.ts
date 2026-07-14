import { createSlice } from '@reduxjs/toolkit';

import { AdminPageSchema } from '../types/AdminPageSchema';

const initialState: AdminPageSchema = {
    data: undefined,
    error: undefined,
    isLoading: false,
};

export const adminPageSlice = createSlice({
    name: 'adminPage',
    initialState,
    reducers: {},
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(.pending, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(
    //             .fulfilled,
    //             (state, action: PayloadAction<>) => {
    //                 state.isLoading = false;
    //                 state.data = action.payload;
    //             },
    //         )
    //         .addCase(.rejected, (state, action) => {
    //             state.error = action.payload;
    //             state.isLoading = false;
    //         });
    // },
});

export const { actions: adminPageActions } = adminPageSlice;
export const { reducer: adminPageReducer } = adminPageSlice;
