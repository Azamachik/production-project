import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/Article';

export interface ArticlesSchema extends EntityState<Article> {
    view: ArticleView;
    isLoading?: boolean;
    error?: string;
    limit?: number;
    page: number;
    hasMore: boolean;
}
