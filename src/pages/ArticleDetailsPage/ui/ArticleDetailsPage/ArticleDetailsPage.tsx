import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { ArticleDetails } from '@/entities/Article';
import { ArticleRating } from '@/features/ArticleRating';
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    ReducersList,
    useDynamicModuleLoad,
} from '@/shared/lib/hooks/useDynamicModuleLoad/useDynamicModuleLoad';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { ArticleComments } from '@/widgets/ArticleComments';
import { Page } from '@/widgets/Page';

import { addArticlesComment } from '../../model/services/addArticlesComment/addArticlesComment';
import { articleDetailsPageReducer } from '../../model/slices';
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

    useDynamicModuleLoad(reducers, true);

    const onSend = useCallback(
        (text: string) => {
            dispatch(addArticlesComment(text));
        },
        [dispatch],
    );

    if (!id) {
        return <Text title={t('Статьи не существует')} />;
    }

    return (
        <Page className={classNames('', {}, [className])}>
            <VStack gap="16" max>
                <ArticleDetailsPageHeader />
                <ArticleDetails id={id} />
                <ArticleRating articleId={id} />
                <ArticleRecommendationsList />
                <ArticleComments id={id} onSend={onSend} />
            </VStack>
        </Page>
    );
};

export default memo(ArticleDetailsPage);
