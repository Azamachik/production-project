import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from 'features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword';

describe('getLoginPassword', () => {
    test('Should return password`s value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: '1234',
            },
        };
        expect(getLoginPassword(state as StateSchema)).toBe('1234');
    });
    test('Should return empty string working with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toBe('');
    });
});
