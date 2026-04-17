import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { Sidebar } from './Sidebar';

const meta = {
    title: 'widgets/Sidebar',
    component: Sidebar,
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    decorators: [StoreDecorator({
        user: { authData: {} },
    })],
};

export const PrimaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
        user: { authData: {} },
    })],
};

export const NoAuth: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
    })],
};
