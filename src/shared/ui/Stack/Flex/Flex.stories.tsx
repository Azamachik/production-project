import type { Meta, StoryObj } from '@storybook/react';

import { Flex } from './Flex';

const meta = {
    title: 'shared/Stack/Flex',
    component: Flex,
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        direction: 'row',
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
                <div>fourth</div>
            </>
        ),
    },
};

export const RowGap4: Story = {
    args: {
        direction: 'row',
        gap: '4',
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
                <div>fourth</div>
            </>
        ),
    },
};

export const RowGap16: Story = {
    args: {
        direction: 'row',
        gap: '16',
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
                <div>fourth</div>
            </>
        ),
    },
};

export const RowGap20: Story = {
    args: {
        direction: 'row',
        gap: '20',
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
                <div>fourth</div>
            </>
        ),
    },
};

export const RowGap32: Story = {
    args: {
        direction: 'row',
        gap: '32',
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
                <div>fourth</div>
            </>
        ),
    },
};

export const ColumnGap4: Story = {
    args: {
        direction: 'column',
        gap: '4',
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
                <div>fourth</div>
            </>
        ),
    },
};

export const ColumnGap16: Story = {
    args: {
        direction: 'column',
        gap: '16',
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
                <div>fourth</div>
            </>
        ),
    },
};

export const ColumnGap20: Story = {
    args: {
        direction: 'column',
        gap: '20',
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
                <div>fourth</div>
            </>
        ),
    },
};

export const ColumnGap32: Story = {
    args: {
        direction: 'column',
        gap: '32',
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
                <div>fourth</div>
            </>
        ),
    },
};
