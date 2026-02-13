import { StateSchema } from 'app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
    test('Return counter`s value', () => {
        const state: StateSchema = {
            counter: { value: 7 },
        };
        expect(getCounterValue(state)).toEqual(7);
    });
});
