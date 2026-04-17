import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Skeleton } from './Skeleton';

const meta = {
    title: 'shared/Skeleton',
    component: Skeleton,
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        width: '100%',
        height: 200,
    },
};

export const PrimaryDark: Story = {
    args: {
        width: '100%',
        height: 200,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Circle: Story = {
    args: {
        width: 200,
        height: 200,
        borderRadius: '50%',

    },
};

export const CircleDark: Story = {
    args: {
        width: 200,
        height: 200,
        borderRadius: '50%',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
