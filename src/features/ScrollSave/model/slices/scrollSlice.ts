import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ScrollSaveSchema } from '../types/ScrollSaveSchema';

const initialState: ScrollSaveSchema = {
    scroll: {},
};

export const scrollSlice = createSlice({
    name: 'scrollSlice',
    initialState,
    reducers: {
        setScrollPosition: (
            state,
            { payload }: PayloadAction<{ path: string; position: number }>,
        ) => {
            state.scroll[payload.path] = payload.position;
        },
    },
});

export const { reducer: scrollReducer } = scrollSlice;
export const { actions: scrollActions } = scrollSlice;
