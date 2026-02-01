import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

const meta = {
    title: 'shared/Button',
    component: Button,
    // parameters: {
    //     layout: 'centered',
    // },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
    args: {
        children: 'Button',
        variant: ButtonTheme.CLEAR,
    },
};

export const Outline: Story = {
    args: {
        children: 'Button',
        variant: ButtonTheme.OUTLINE,
    },
};

export const OutlineSizeM: Story = {
    args: {
        children: 'Button',
        variant: ButtonTheme.OUTLINE,
        size: ButtonSize.M,
    },
};

export const OutlineSizeL: Story = {
    args: {
        children: 'Button',
        variant: ButtonTheme.OUTLINE,
        size: ButtonSize.L,
    },
};

export const OutlineSizeXl: Story = {
    args: {
        children: 'Button',
        variant: ButtonTheme.OUTLINE,
        size: ButtonSize.XL,
    },
};

export const OutlineDark: Story = {
    args: {
        children: 'Button',
        variant: ButtonTheme.OUTLINE,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Square: Story = {
    args: {
        children: '>',
        variant: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
    },
};

export const SquareSizeM: Story = {
    args: {
        children: '>',
        variant: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.M,
    },
};

export const SquareSizeL: Story = {
    args: {
        children: '>',
        variant: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.L,
    },
};

export const SquareSizeXl: Story = {
    args: {
        children: '>',
        variant: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL,
    },
};
