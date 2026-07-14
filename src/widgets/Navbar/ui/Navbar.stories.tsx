import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/shared/consts/theme';

import { Navbar } from './Navbar';

const meta = {
    title: 'widgets/Navbar',
    component: Navbar,
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    decorators: [
        StoreDecorator({
            user: { authData: {} },
        }),
    ],
};

export const PrimaryDark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            user: { authData: {} },
        }),
    ],
};

export const Authenticated: Story = {
    decorators: [
        StoreDecorator({
            user: { authData: {} },
        }),
    ],
};
