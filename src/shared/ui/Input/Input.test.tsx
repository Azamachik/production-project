import { ComponentRender } from 'shared/lib/tests/componentRender/ComponentRender';
import { screen } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
    test('Contain the entered value', () => {
        ComponentRender(<Input placeholder="Enter value" />);
        
        expect(screen.getByTestId('input-placeholder')).toHaveTextContent('Enter value');
    });
});
