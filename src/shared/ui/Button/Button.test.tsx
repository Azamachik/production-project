import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { screen } from '@testing-library/react';
import {
    renderWithTranslation,
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('Button', () => {
    test('Renders correct with text in', () => {
        renderWithTranslation(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('Applies correct CSS class when variant is provided', () => {
        renderWithTranslation(<Button variant={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
});
