import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { RoutePath } from '@/shared/consts/router';
import { Button } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';

import { getCanEditArticle } from '../../model/selectors/article';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo(
    (props: ArticleDetailsPageHeaderProps) => {
        const { className } = props;
        const canEdit = useSelector(getCanEditArticle);
        const navigate = useNavigate();
        const { t } = useTranslation('article-details');

        const onBack = useCallback(() => {
            navigate(RoutePath.articles);
        }, []);

        const onEdit = useCallback(() => {
            navigate(RoutePath.article_edit);
        }, []);

        return (
            <HStack className={className} justify="between">
                <Button onClick={onBack}>{t('Назад к статьям')}</Button>
                {canEdit && (
                    <Button onClick={onEdit}>{t('Редактировать')}</Button>
                )}
            </HStack>
        );
    },
);

ArticleDetailsPageHeader.displayName = 'ArticleDetailsPageHeader';
