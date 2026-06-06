import { ArticleDetails, ArticleList } from 'entities/Article';
import { CommentList, Comment } from 'entities/Comment';
import { AddCommentForm } from 'features/AddCommentForm';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    ReducersList,
    useDynamicModuleLoad,
} from 'shared/lib/hooks/useDynamicModuleLoad/useDynamicModuleLoad';
import { Button } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';

import { Page } from 'widgets/Page';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { addArticlesComment } from '../../model/services/addArticlesComment/addArticlesComment';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';

import cls from './ArticleDetailsPage.module.scss';
import { articleDetailsPageReducer } from '../../model/slices';
import { getArticleDetailsPageCommentsIsLoading } from '../../model/selectors/getArticleDetailsComments';
import { getArticleDetailsPageRecommendationsIsLoading } from '../../model/selectors/getRecommendations';
import { getArticleRecommendationsList } from '../../model/slices/articleDetailsRecommendationList';
import { fetchArticlesRecommendationList } from '../../model/services/fetchArticlesRecommendationList/fetchArticlesRecommendationList';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation('article-details');
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsPageCommentsIsLoading);
    const comments: Comment[] = useSelector(getArticleComments.selectAll) || [];
    const recommendationsIsLoading = useSelector(
        getArticleDetailsPageRecommendationsIsLoading,
    );
    const recommendations =
        useSelector(getArticleRecommendationsList.selectAll) || [];

    const navigate = useNavigate();

    useDynamicModuleLoad(reducers, true);

    const onSend = useCallback(
        (text: string) => {
            dispatch(addArticlesComment(text));
        },
        [dispatch],
    );

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticlesRecommendationList());
    });

    if (!id) {
        return <Text title={t('Статьи не существует')} />;
    }

    return (
        <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            <ArticleDetailsPageHeader />
            <ArticleDetails id={id} />
            <Text className={cls.commentTitle} title={t('Рекомендуем')} />
            <ArticleList
                articles={recommendations}
                isLoading={recommendationsIsLoading}
                className={cls.recommendations}
                target="_blank"
            />
            {!isLoading && (
                <>
                    <Text
                        title={t('Комментарии')}
                        className={cls.commentTitle}
                    />
                    <AddCommentForm onSend={onSend} />
                </>
            )}
            <CommentList isLoading={isLoading} comments={comments} />
        </Page>
    );
};

export default memo(ArticleDetailsPage);
