import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleList, ArticleView } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import cls from './ArticleRecommendationsList.module.scss';

import { useGetArticleRecommendationsListQuery } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo(
    (props: ArticleRecommendationsListProps) => {
        const { className } = props;
        const { t } = useTranslation('article-details');
        const {
            data: articles,
            isLoading,
            error,
        } = useGetArticleRecommendationsListQuery(10);

        if (isLoading || error || !articles) {
            return null;
        }

        return (
            <VStack className={classNames('', {}, [className])} gap="8">
                <Text className={cls.commentTitle} title={t('Рекомендуем')} />
                <ArticleList
                    className={classNames(cls.recommendations, {}, [className])}
                    articles={articles}
                    target="_blank"
                    view={ArticleView.GRID}
                />
            </VStack>
        );
    },
);
