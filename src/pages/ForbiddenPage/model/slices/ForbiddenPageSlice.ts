import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ForbiddenPageSchema } from '../types/ForbiddenPageSchema';

const initialState: ForbiddenPageSchema = {
    data: undefined,
    error: undefined,
    isLoading: false,
};

export const forbiddenPageSlice = createSlice({
    name: 'forbiddenPage',
    initialState,
    reducers: {

    },
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

export const { actions: forbiddenPageActions } = forbiddenPageSlice;
export const { reducer: forbiddenPageReducer } = forbiddenPageSlice;
