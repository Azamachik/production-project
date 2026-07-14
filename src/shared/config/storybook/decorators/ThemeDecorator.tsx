import { StoryFn } from '@storybook/react';

// eslint-disable-next-line feature-sliced-path-checker-stable/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Theme } from '@/shared/consts/theme';

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <Story />
        </div>
    </ThemeProvider>
);
