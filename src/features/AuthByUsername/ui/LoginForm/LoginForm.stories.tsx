import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { LoginForm } from './LoginForm';

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    decorators: [StoreDecorator({
        loginForm: { username: 'user', password: 'password' },
    })],
};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            loginForm: { username: 'user', password: 'password' },
        }),
    ],
};

export const Loading: Story = {
    decorators: [
        StoreDecorator({
            loginForm: { username: 'user', password: 'password', isLoading: true },
        }),
    ],
};

export const Error: Story = {
    decorators: [
        StoreDecorator({
            loginForm: { username: 'user', password: 'password', error: 'error' },
        }),
    ],
};
