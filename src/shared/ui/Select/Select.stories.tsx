import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Select } from './Select';

const meta = {
    title: 'shared/Select',
    component: Select,
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        label: 'Select',
        value: 'Select',
        options: [
            {
                value: 'Option 1',
                content: 'Option 1',
            },
            {
                value: 'Option 2',
                content: 'Option 2',
            },
            {
                value: 'Option 3',
                content: 'Option 3',
            },
        ],
    },
};

export const PrimaryDark: Story = {
    args: {
        label: 'Select',
        value: 'Select',
        options: [
            {
                value: 'Option 1',
                content: 'Option 1',
            },
            {
                value: 'Option 2',
                content: 'Option 2',
            },
            {
                value: 'Option 3',
                content: 'Option 3',
            },
        ],
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
