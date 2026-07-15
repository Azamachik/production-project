import type { Preview } from '@storybook/react';

import { RouterDecorator } from '../../src/shared/config/storybook/decorators/RouterDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/decorators/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '../../src/shared/consts/theme';

import '../../src/app/styles/index.scss';

const preview: Preview = {
    decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), RouterDecorator],
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        themes: {
            default: 'light',
            list: [
                { name: 'light', class: ['app', Theme.LIGHT], color: 'white' },
                { name: 'dark', class: ['app', Theme.DARK], color: 'dark' },
                {
                    name: 'orange',
                    class: ['app', Theme.ORANGE],
                    color: 'orange',
                },
            ],
        },
    },
};
