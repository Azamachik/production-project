import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/shared/consts/theme';

import NotFoundPage from './NotFoundPage';

const meta = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
