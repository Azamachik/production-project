import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Card } from 'shared/ui/Card/Card';
import { SortOrder } from 'shared/lib/types';
import { ArticleSortSelector } from 'entities/Article/ui/ArticleSortSelector/ArticleSortSelector';
import { useSelector } from 'react-redux';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { ArticleTypeSelector } from 'entities/Article/ui/ArticleTypeSelector/ArticleTypeSelector';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    ArticleSortField,
    ArticleType,
} from 'entities/Article/model/consts/consts';
import {
    getArticlesOrder,
    getArticlesSearch,
    getArticlesSort,
    getArticlesType,
} from '../../model/selectors/getArticles';
import { articlesActions } from '../../model/slices/articlesSlice';
import { fetchArticles } from '../../model/services/fetchArticles/fetchArticles';
import cls from './ArticlesPageFilters.module.scss';

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
