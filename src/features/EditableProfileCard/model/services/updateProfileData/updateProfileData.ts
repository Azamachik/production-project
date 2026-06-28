import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from 'entities/Profile';

import { getProfileFormData } from '../../selectors/getProfileFormData/getProfileFormData';
import { validateProfileData } from '../validateProfileData/validateProfileData';
import { ValidateProfileError } from '../../consts/consts';

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<ValidateProfileError[]>
>('profile/updateProfileData', async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;

    const formData = getProfileFormData(getState());
    const errors = validateProfileData(formData);

    if (errors.length) {
        return rejectWithValue(errors);
    }

    try {
        const response = await extra.api.put<Profile>(
            `/profile/${formData?.id}`,
            formData,
        );

        return response.data;
    } catch (error) {
        console.log(error);
        return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
    }
});
