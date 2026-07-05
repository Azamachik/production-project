import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Article, ArticleList, ArticleView } from '@/entities/Article';
import { Text } from '@/shared/ui/Text/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleListItem } from '@/entities/Article/ui/ArticleListItem/ArticleListItem';
import { HStack } from '@/shared/ui/Stack/HStack/HStack';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
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
