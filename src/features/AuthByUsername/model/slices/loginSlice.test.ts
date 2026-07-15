import { DeepPartial } from '@reduxjs/toolkit';

import { loginActions, loginReducer } from './loginSlice';
import { LoginSchema } from '../types/LoginSchema';

describe('loginSlice', () => {
    test('Set username with success', () => {
        const state: DeepPartial<LoginSchema> = { username: 'user' };

        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setUsername('user_update'),
            ),
        ).toEqual({ username: 'user_update' });
    });

    test('Set password with success', () => {
        const state: DeepPartial<LoginSchema> = { password: 'pass' };

        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setPassword('new_password'),
            ),
        ).toEqual({ password: 'new_password' });
    });
});
