import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { getCounter } from './getCounter';

describe('getCounter', () => {
    test('Return counter`s value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 7 },
        };
        expect(getCounter(state as StateSchema)).toEqual({ value: 7 });
    });
});
