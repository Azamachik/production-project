const firstCharToUpperCase = require('../firstCharToUpperCase');

module.exports = (layer, componentName) => {
    const component = firstCharToUpperCase(componentName);

    return `import type { Meta, StoryObj } from '@storybook/react';
import { ${component} } from './${component}';

const meta = {
    title: '${layer}/${component}',
    component: ${component},
} satisfies Meta<typeof ${component}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {

    },
};
`;
};
