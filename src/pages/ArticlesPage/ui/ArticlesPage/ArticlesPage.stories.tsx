import type { Meta, StoryObj } from '@storybook/react';

import { ArticleView } from '@/entities/Article';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';

import ArticlesPage from './ArticlesPage';

const meta = {
    title: 'pages/ArticlesPage',
    component: ArticlesPage,
} satisfies Meta<typeof ArticlesPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    decorators: [
        StoreDecorator({
            articles: {
                view: ArticleView.LIST,
                page: 1,
                hasMore: true,
                _inited: true,
            },
        }),
    ],
};
