import { ArticleDetails } from 'entities/Article';
import { CommentList, Comment } from 'entities/Comment';
import { AddCommentForm } from 'features/AddCommentForm';
import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RoutePath } from 'shared/config/rootConfig/rootConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ReducersList, useDynamicModuleLoad } from 'shared/lib/hooks/useDynamicModuleLoad/useDynamicModuleLoad';
import { Button } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';

import { Page } from 'shared/ui/Page/Page';
import { getArticleDetailsCommentsIsLoading } from '../../model/selectors/getArticleDetailsComments';
import { addArticlesComment } from '../../model/services/addArticlesComment/addArticlesComment';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';

import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation('article-details');
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsCommentsIsLoading);
    const comments: Comment[] = useSelector(getArticleComments.selectAll) || [];
    const navigate = useNavigate();

    useDynamicModuleLoad(reducers, true);

    const onSend = useCallback(
        (text: string) => {
            dispatch(addArticlesComment(text));
        },
        [dispatch],
    );

    const onBack = useCallback(() => {
        navigate(RoutePath.articles);
    }, []);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchCommentsByArticleId(id));
        }
        // eslint-disable-next-line
    }, []);

    if (!id) {
        return <Text title={t('Статьи не существует')} />;
    }

    return (
        <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            <Button onClick={onBack}>{t('Назад к статьям')}</Button>
            <ArticleDetails id={id} />
            {!isLoading && (
                <>
                    <Text title={t('Комментарии')} className={cls.commentTitle} />
                    <AddCommentForm onSend={onSend} />
                </>
            )}
            <CommentList isLoading={isLoading} comments={comments} />
        </Page>
    );
};

export default memo(ArticleDetailsPage);
