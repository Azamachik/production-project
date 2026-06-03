import { ArticleList, ArticleView } from 'entities/Article';
import { ToggleArticleView } from 'features/ArticleView';
import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    ReducersList,
    useDynamicModuleLoad,
} from 'shared/lib/hooks/useDynamicModuleLoad/useDynamicModuleLoad';

import { Page } from 'widgets/Page';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import {
    getArticlesError,
    getArticlesInited,
    getArticlesIsLoading,
    getArticlesView,
} from '../../model/selectors/getArticles';
import { fetchArticles } from '../../model/services/fetchArticles/fetchArticles';
import {
    articlesActions,
    articlesReducer,
    getArticles,
} from '../../model/slices/articlesSlice';

import cls from './ArticlesPage.module.scss';
import { fetchNextArticles } from '../../model/services/fetchNextArticles/fetchNextArticles';

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
    const inited = useSelector(getArticlesInited);

    useDynamicModuleLoad(reducers, false);

    useInitialEffect(() => {
        if (!inited) {
            dispatch(articlesActions.initState());
            dispatch(fetchArticles({ page: 1 }));
        }
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
            className={classNames(cls.ArticlesPage, {}, [className])}
            onScrollEnd={onLoadNextPart}
        >
            <ToggleArticleView view={view} onViewClick={onViewChange} />
            <ArticleList
                articles={articles}
                view={view}
                isLoading={isLoading}
            />
        </Page>
    );
};

export default memo(ArticlesPage);
