import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Code } from './Code';

const meta = {
    title: 'shared/Code',
    component: Code,
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        code: 'export default {\n'
            + '    title: \'shared/Code\',\n'
            + '    component: Code,\n'
            + '} satisfies Meta<typeof Code>;\n',
    },
};

export const PrimaryDark: Story = {
    args: {
        code: 'export default {\n'
            + '    title: \'shared/Code\',\n'
            + '    component: Code,\n'
            + '} satisfies Meta<typeof Code>;\n',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
