import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';

import {
    useGetArticleRatingQuery,
    useRateArticleMutation,
} from '../api/articleRatingApi';

interface ArticleRatingProps {
    className?: string;
    articleId: string;
}

export const ArticleRating = (props: ArticleRatingProps) => {
    const { className, articleId } = props;
    const user = useSelector(getUserAuthData);
    const [rateArticleMutation] = useRateArticleMutation();
    const { data, isLoading } = useGetArticleRatingQuery({
        articleId,
        userId: user!.id,
    });
    const { t } = useTranslation('article-details');

    const rating = data?.[0];

    const handleRateArticle = useCallback(
        (rating: number, feedback?: string) => {
            try {
                rateArticleMutation({
                    userId: user!.id,
                    articleId,
                    rate: rating,
                    feedback,
                });
            } catch (error) {
                console.error(error);
            }
        },
        [user, articleId, rateArticleMutation],
    );

    const onCancel = useCallback(
        (rating: number) => {
            handleRateArticle(rating);
        },
        [handleRateArticle],
    );

    const onSubmit = useCallback(
        (rating: number, feedback?: string) => {
            handleRateArticle(rating, feedback);
        },
        [handleRateArticle],
    );

    if (isLoading) return null;

    return (
        <RatingCard
            className={className}
            title="Оцените статью"
            onCancel={onCancel}
            onSubmit={onSubmit}
            feedbackTitle={t(
                'Оставьте свой отзыв о статье, это поможет улучшить качество',
            )}
            hadFeedback
            rate={rating?.rate}
        />
    );
};
