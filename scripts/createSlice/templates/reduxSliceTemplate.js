const firstCharToLowerCase = require('../firstCharToLowerCase');
const firstCharToUpperCase = require('../firstCharToUpperCase');

module.exports = (componentName) => {
    const camelCaseName = firstCharToLowerCase(componentName);
    const PascalCaseName = firstCharToUpperCase(componentName);

    return `import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ${PascalCaseName}Schema } from '../types/${PascalCaseName}Schema';

const initialState: ${PascalCaseName}Schema = {
    data: undefined,
    error: undefined,
    isLoading: false,
};

export const ${camelCaseName}Slice = createSlice({
    name: '${camelCaseName}',
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

export const { actions: ${camelCaseName}Actions } = ${camelCaseName}Slice;
export const { reducer: ${camelCaseName}Reducer } = ${camelCaseName}Slice;
`;
};
