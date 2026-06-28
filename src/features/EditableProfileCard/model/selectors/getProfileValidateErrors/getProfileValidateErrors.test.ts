import { StateSchema } from 'app/providers/StoreProvider';

import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileError } from '../../consts/consts';

describe('getProfileValidateErrors', () => {
    test('Should return an array of validation errors', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [
                    ValidateProfileError.NO_DATA,
                    ValidateProfileError.INCORRECT_USER_DATA,
                    ValidateProfileError.SERVER_ERROR,
                ],
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            ValidateProfileError.NO_DATA,
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.SERVER_ERROR,
        ]);
    });

    test('Should return undefined working with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toBeUndefined();
    });
});
