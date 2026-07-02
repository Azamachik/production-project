import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Tabs } from './Tabs';

const meta = {
    title: 'shared/Tabs',
    component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const typeTabs = [
    {
        value: '1',
        content: 'Все статьи',
    },
    {
        value: '2',
        content: 'Айти',
    },
    {
        value: '3',
        content: 'Экономика',
    },
    {
        value: '4',
        content: 'Наука',
    },
];

export const Primary: Story = {
    args: {
        value: '1',
        tabs: typeTabs,
    },
};

export const PrimaryDark: Story = {
    args: {
        value: '1',
        tabs: typeTabs,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
