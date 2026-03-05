import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

const meta = {
    title: 'shared/Text',
    component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: 'Title Title Title',
        text: 'text text text',
        variant: TextTheme.PRIMARY,
    },
};

export const Danger: Story = {
    args: {
        title: 'Title Title Title',
        text: 'text text text',
        variant: TextTheme.DANGER,
    },
};

export const PrimaryDark: Story = {
    args: {
        title: 'Title Title Title',
        text: 'text text text',
        variant: TextTheme.PRIMARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const DangerDark: Story = {
    args: {
        title: 'Title Title Title',
        text: 'text text text',
        variant: TextTheme.DANGER,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTitle: Story = {
    args: {
        title: 'Title Title Title',
        variant: TextTheme.PRIMARY,
    },
};

export const OnlyText: Story = {
    args: {
        text: 'text text text',
        variant: TextTheme.PRIMARY,
    },
};
