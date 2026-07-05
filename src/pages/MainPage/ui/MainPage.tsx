import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from '@/app/providers/ErrorBoundary';
import { Page } from '@/widgets/Page';
import { RatingCard } from '@/entities/Rating';

const MainPage = memo(() => {
    const { t } = useTranslation('main');

    return (
        <Page>
            <BugButton />
            {t('Главная')}
            <RatingCard />
        </Page>
    );
});

export default MainPage;
