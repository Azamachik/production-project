import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getCanEditArticle } from '../../model/selectors/article';
import cls from './ArticleDetailsPageHeader.module.scss';

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
            <div className={classNames(cls.controlButtons, {}, [className])}>
                <Button onClick={onBack}>{t('Назад к статьям')}</Button>
                {canEdit && (
                    <Button onClick={onEdit}>{t('Редактировать')}</Button>
                )}
            </div>
        );
    },
);

ArticleDetailsPageHeader.displayName = 'ArticleDetailsPageHeader';
