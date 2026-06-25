import type { Meta, StoryObj } from '@storybook/react';
import AdminPage from './AdminPage';

const meta = {
    title: 'pages/AdminPage',
    component: AdminPage,
} satisfies Meta<typeof AdminPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
