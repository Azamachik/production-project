import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/shared/consts/theme';

import { Badge } from './Badge';

const meta = {
    title: 'shared/Badge',
    component: Badge,
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        text: 'Badge',
    },
};

export const PrimaryDark: Story = {
    args: {
        text: 'Badge',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
