import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import type { SortOrder } from 'shared/lib/types';
import cls from './ArticleSortSelector.module.scss';
import { ArticleSortField } from '../../model/consts/consts';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onOrderChange: (newOrder: SortOrder) => void;
    onSortChange: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const { className, onOrderChange, onSortChange, order, sort } = props;
    const { t } = useTranslation();

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(
        () => [
            {
                value: 'asc',
                content: t('возрастанию'),
            },
            {
                value: 'desc',
                content: t('убыванию'),
            },
        ],
        [t],
    );

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
        () => [
            {
                value: ArticleSortField.DATE,
                content: t('дате создания'),
            },
            {
                value: ArticleSortField.TITLE,
                content: t('названию'),
            },
            {
                value: ArticleSortField.VIEWS,
                content: t('просмотрам'),
            },
        ],
        [t],
    );

    const handleSortChange = useCallback(
        (newSort: string) => {
            onSortChange(newSort as ArticleSortField);
        },
        [onSortChange],
    );

    const handleOrderChange = useCallback(
        (newOrder: string) => {
            onOrderChange(newOrder as SortOrder);
        },
        [onOrderChange],
    );

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select
                options={sortFieldOptions}
                label={t('Сортировать ПО')}
                value={sort}
                onChange={handleSortChange}
            />
            <Select
                options={orderOptions}
                label={t('по')}
                value={order}
                onChange={handleOrderChange}
                className={cls.order}
            />
        </div>
    );
});
