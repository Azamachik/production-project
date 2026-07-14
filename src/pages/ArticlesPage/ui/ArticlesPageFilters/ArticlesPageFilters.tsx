import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import {
    ArticleSortField,
    ArticleSortSelector,
} from '@/features/ArticleSortSelector';
import {
    ArticleType,
    ArticleTypeSelector,
} from '@/features/ArticleTypeSelector';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { SortOrder } from '@/shared/lib/types';
import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';

import cls from './ArticlesPageFilters.module.scss';

import {
    getArticlesOrder,
    getArticlesSearch,
    getArticlesSort,
    getArticlesType,
} from '../../model/selectors/getArticles';
import { fetchArticles } from '../../model/services/fetchArticles/fetchArticles';
import { articlesActions } from '../../model/slices/articlesSlice';

interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
    const { className } = props;
    const order = useSelector(getArticlesOrder);
    const sort = useSelector(getArticlesSort);
    const dispatch = useAppDispatch();
    const search = useSelector(getArticlesSearch);
    const type = useSelector(getArticlesType);

    const fetchData = useCallback(() => {
        dispatch(fetchArticles({ replace: true }));
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 800);

    const onSortChange = useCallback(
        (newSort: ArticleSortField) => {
            dispatch(articlesActions.setSort(newSort));
            dispatch(articlesActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData],
    );

    const onOrderChange = useCallback(
        (newOrder: SortOrder) => {
            dispatch(articlesActions.setOrder(newOrder));
            dispatch(articlesActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData],
    );

    const onSearchChange = useCallback(
        (search: string) => {
            dispatch(articlesActions.setSearch(search));
            dispatch(articlesActions.setPage(1));
            debouncedFetchData();
        },
        [dispatch, debouncedFetchData],
    );

    const onTypeChange = useCallback(
        (type: ArticleType) => {
            dispatch(articlesActions.setType(type));
            dispatch(articlesActions.setPage(1));
            debouncedFetchData();
        },
        [dispatch, debouncedFetchData],
    );

    return (
        <div className={classNames('', {}, [className])}>
            <Card className={cls.wrapper}>
                <Input
                    placeholder="Поиск"
                    value={search}
                    onChange={onSearchChange}
                />
                <ArticleSortSelector
                    order={order}
                    sort={sort}
                    onOrderChange={onOrderChange}
                    onSortChange={onSortChange}
                />
            </Card>
            <ArticleTypeSelector value={type} onChange={onTypeChange} />
        </div>
    );
});

ArticlesPageFilters.displayName = 'ArticlesPageFilters';
