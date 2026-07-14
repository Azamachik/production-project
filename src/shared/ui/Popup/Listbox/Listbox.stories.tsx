import type { Meta, StoryObj } from '@storybook/react';

import { Listbox } from './Listbox';

const meta = {
    title: 'shared/Listbox',
    component: Listbox,
} satisfies Meta<typeof Listbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
