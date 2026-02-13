import { StateSchema } from 'app/providers/StoreProvider';
import { getCounter } from './getCounter';

describe('getCounter', () => {
    test('Return counter`s value', () => {
        const state: StateSchema = {
            counter: { value: 7 },
        };
        expect(getCounter(state)).toEqual({ value: 7 });
    });
});
