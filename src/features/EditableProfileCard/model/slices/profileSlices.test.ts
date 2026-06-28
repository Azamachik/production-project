import { profileActions, profileReducer } from 'features/EditableProfileCard';

import { ProfileSchema } from '../types/types';

describe('profileSlices', () => {
    test('Should reverse readonly value', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.setReadonly(true),
            ),
        ).toEqual({ readonly: true });
    });
});
