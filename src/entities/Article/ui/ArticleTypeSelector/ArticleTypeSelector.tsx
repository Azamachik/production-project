import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { TabItem, Tabs } from '@/shared/ui/Tabs/Tabs';
import { ArticleType } from '../../model/consts/consts';

interface ArticleTypeSelectorProps {
    className?: string;
    value: ArticleType;
    onChange: (type: ArticleType) => void;
}

export const ArticleTypeSelector = memo((props: ArticleTypeSelectorProps) => {
    const { className, value, onChange } = props;
    const { t } = useTranslation();

    const typeTabs = useMemo<TabItem[]>(
        () => [
            {
                value: ArticleType.ALL,
                content: t('Все статьи'),
            },
            {
                value: ArticleType.IT,
                content: t('Айти'),
            },
            {
                value: ArticleType.ECONOMICS,
                content: t('Экономика'),
            },
            {
                value: ArticleType.SCIENCE,
                content: t('Наука'),
            },
        ],
        [t],
    );

    const onTabClick = useCallback(
        (tab: TabItem) => {
            onChange(tab.value as ArticleType);
        },
        [onChange],
    );

    return <Tabs value={value} tabs={typeTabs} onTabClick={onTabClick} />;
});

ArticleTypeSelector.displayName = 'ArticleTypeSelector';
