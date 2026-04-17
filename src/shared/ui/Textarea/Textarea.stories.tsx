import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Textarea } from './Textarea';

const meta = {
    title: 'shared/Textarea',
    component: Textarea,
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        placeholder: 'Description',
    },
};

export const PrimaryDark: Story = {
    args: {
        placeholder: 'Description',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
