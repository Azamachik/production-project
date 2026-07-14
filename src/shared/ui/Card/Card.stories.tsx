import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/shared/consts/theme';

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
