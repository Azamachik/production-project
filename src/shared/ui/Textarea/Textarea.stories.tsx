import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';

import type { Meta, StoryObj } from '@storybook/react';
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
