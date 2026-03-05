import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
    test('Return counter`s value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 7 },
        };
        expect(getCounterValue(state as StateSchema)).toEqual(7);
    });
});
