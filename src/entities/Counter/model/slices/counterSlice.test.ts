import { counterActions, counterReducer } from './counterSlice';
import { CounterSchema } from '../types/CounterSchema';

describe('counterSlice', () => {
    let state: CounterSchema;
    beforeEach(() => {
        state = {
            value: 7,
        };
    });
    test('Should return counter`s value', () => {
        expect(state).toEqual({ value: 7 });
    });
    test('Should increment value', () => {
        expect(counterReducer(state, counterActions.increment())).toEqual({ value: 8 });
    });
    test('Should decrement value', () => {
        expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 6 });
    });
    test('Should work with empty arguments', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
    });
});
