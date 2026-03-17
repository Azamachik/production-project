import { createSlice } from '@reduxjs/toolkit';
import { ProfileSchema } from 'entities/Profile';

const initialState: ProfileSchema = {
    readonly: true,
    isLoading: false,
    data: undefined,
    error: undefined,
};

export const profileSlices = createSlice({
    name: 'profileSlices',
    initialState,
    reducers: {},
});

export const { actions: profileActions } = profileSlices;
export const { reducer: profileReducer } = profileSlices;
