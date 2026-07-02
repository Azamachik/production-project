import { ArticleList, ArticleView } from '@/entities/Article';
import { ToggleArticleView } from '@/features/ArticleView';
import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    ReducersList,
    useDynamicModuleLoad,
} from '@/shared/lib/hooks/useDynamicModuleLoad/useDynamicModuleLoad';
import { Page } from '@/widgets/Page';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSearchParams } from 'react-router-dom';
import { initArticles } from '../../model/services/initArticles/initArticles';
import {
    getArticlesError,
    getArticlesIsLoading,
    getArticlesView,
} from '../../model/selectors/getArticles';
import {
    articlesActions,
    articlesReducer,
    getArticles,
} from '../../model/slices/articlesSlice';
import cls from './ArticlesPage.module.scss';
import { fetchNextArticles } from '../../model/services/fetchNextArticles/fetchNextArticles';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articles: articlesReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesIsLoading);
    const view = useSelector(getArticlesView);
    const error = useSelector(getArticlesError);
    const [searchParams] = useSearchParams();
    // DOM-элемент скролл-контейнера Page — отдаём его Virtuoso как customScrollParent
    const [pageElement, setPageElement] = useState<HTMLElement | null>(null);

    useDynamicModuleLoad(reducers, false);

    useInitialEffect(() => {
        dispatch(initArticles(searchParams));
    });

    const onViewChange = useCallback(
        (view: ArticleView) => {
            dispatch(articlesActions.setView(view));
        },
        [dispatch],
    );

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticles());
    }, [dispatch]);

    return (
        <Page
            ref={setPageElement}
            className={classNames(cls.ArticlesPage, {}, [className])}
        >
            <ArticlesPageFilters />
            <ToggleArticleView view={view} onViewClick={onViewChange} />
            <ArticleList
                className={cls.list}
                articles={articles}
                view={view}
                isLoading={isLoading}
                onLoadNextPart={onLoadNextPart}
                customScrollParent={pageElement ?? undefined}
                virtualized
            />
        </Page>
    );
};

export default memo(ArticlesPage);
