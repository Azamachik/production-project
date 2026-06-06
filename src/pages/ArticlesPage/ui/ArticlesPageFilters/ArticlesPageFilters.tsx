import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import {
    ArticleSortField,
    ArticleType,
} from 'entities/Article/model/types/article';
import { Card } from 'shared/ui/Card/Card';
import { SortOrder } from 'shared/lib/types';
import { ArticleSortSelector } from 'entities/Article/ui/ArticleSortSelector/ArticleSortSelector';
import {
    getArticlesOrder,
    getArticlesSearch,
    getArticlesSort,
    getArticlesType,
} from 'pages/ArticlesPage/model/selectors/getArticles';
import { useDispatch, useSelector } from 'react-redux';
import { articlesActions } from 'pages/ArticlesPage/model/slices/articlesSlice';
import { fetchArticles } from 'pages/ArticlesPage/model/services/fetchArticles/fetchArticles';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { ArticleTypeSelector } from 'entities/Article/ui/ArticleTypeSelector/ArticleTypeSelector';
import cls from './ArticlesPageFilters.module.scss';

interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
    const { className } = props;
    const order = useSelector(getArticlesOrder);
    const sort = useSelector(getArticlesSort);
    const dispatch = useDispatch();
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
