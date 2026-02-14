import { ComponentRender } from 'shared/lib/tests/componentRender/ComponentRender';
import { fireEvent, screen } from '@testing-library/react';
import { Counter } from './Counter';

describe('Counter', () => {
    beforeEach(() => {
        ComponentRender(<Counter />, { initialState: { counter: { value: 7 } } });
    });
    test('Renders correctly', () => {
        expect(screen.getByTestId('counter-value')).toHaveTextContent('7');
    });
    test('Renders incremented value', () => {
        fireEvent.click(screen.getByTestId('counter-increment-btn'));
        expect(screen.getByTestId('counter-value')).toHaveTextContent('8');
    });
    test('Renders decremented value', () => {
        fireEvent.click(screen.getByTestId('counter-decrement-btn'));
        expect(screen.getByTestId('counter-value')).toHaveTextContent('6');
    });
});
