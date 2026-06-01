import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';

import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta = {
    title: 'shared/Card',
    component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Text',
    },
};

export const PrimaryDark: Story = {
    args: {
        children: 'Text',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
