import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Input } from './Input';

const meta = {
    title: 'shared/Input',
    component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        placeholder: 'Input',
    },
};

export const Dark: Story = {
    args: {
        placeholder: 'Input',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
