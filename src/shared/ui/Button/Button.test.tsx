import { screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

describe('Button', () => {
    test('Renders correct with text in', () => {
        renderWithTranslation(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('Applies correct CSS class when variant is provided', () => {
        renderWithTranslation(
            <Button variant={ButtonTheme.CLEAR}>TEST</Button>,
        );
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
});
