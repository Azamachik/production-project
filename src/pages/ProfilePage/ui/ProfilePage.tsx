import { classNames } from 'shared/lib/classNames/classNames';
import { ReducersList, useDynamicModuleLoad } from 'shared/lib/hooks/useDynamicModuleLoad/useDynamicModuleLoad';
import { profileReducer } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

interface ProfilePageProps {
    className?: string;
}

const initialReducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const { t } = useTranslation();
    
    useDynamicModuleLoad(initialReducers, true);
    
    return (
        <div className={classNames('', {}, [className])}>
            {t('Профиль')}
        </div>
    );
});

export default ProfilePage;
