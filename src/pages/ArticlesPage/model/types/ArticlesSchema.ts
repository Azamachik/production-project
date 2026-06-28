import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/Article';
import {
    ArticleSortField,
    ArticleType,
} from 'entities/Article/model/consts/consts';
import { SortOrder } from 'shared/lib/types';

export interface ArticlesSchema extends EntityState<Article> {
    view: ArticleView;
    isLoading?: boolean;
    error?: string;
    limit?: number;
    page: number;
    hasMore: boolean;
    order: SortOrder;
    sort: ArticleSortField;
    search: string;
    type: ArticleType;
    _inited: boolean;
}
