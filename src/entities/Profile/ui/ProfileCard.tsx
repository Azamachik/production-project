import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation();
    const data = useSelector(getProfileData);
    
    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Button className={cls.editBtn}>{t('Редактировать')}</Button>
            </div>
            <div className={cls.data}>
                <Input
                    className={cls.input}
                    placeholder={t('Имя')}
                    value={data?.firstname}
                />
                <Input
                    className={cls.input}
                    placeholder={t('Фамилия')}
                    value={data?.lastname}
                />
            </div>
        </div>
    );
};
