import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';

import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta = {
    title: 'shared/Badge',
    component: Badge,
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const PrimaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
