import { Country, CountrySelect } from 'entities/Country';
import { Currency, CurrencySelect } from 'entities/Currency';
import { KeyboardEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Textarea } from 'shared/ui/Textarea/Textarea';

import { Profile } from '../model/types/Profile';

import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    readonly?: boolean;
    isLoading?: boolean;
    error?: string;
    onFirstnameChange?: (value: string) => void;
    onLastnameChange?: (value: string) => void;
    onUsernameChange?: (value: string) => void;
    onAgeChange?: (value: string) => void;
    onCityChange?: (value: string) => void;
    onAvatarChange?: (value: string) => void;
    onCurrencyChange?: (value?: Currency) => void;
    onCountryChange?: (value?: Country) => void;
    onDescriptionChange?: (value: string) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const {
        className,
        data,
        readonly,
        isLoading,
        error,
        onFirstnameChange,
        onLastnameChange,
        onUsernameChange,
        onDescriptionChange,
        onAgeChange,
        onCityChange,
        onAvatarChange,
        onCurrencyChange,
        onCountryChange,
    } = props;

    if (isLoading) {
        return (
            <div
                className={classNames(cls.ProfileCard, {}, [
                    className,
                    cls.error,
                ])}
            >
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div
                className={classNames(cls.ProfileCard, {}, [
                    className,
                    cls.error,
                ])}
            >
                <Text
                    variant={TextTheme.DANGER}
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте обновить страницу')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    const onAgeKeyDown = (event: KeyboardEvent) => {
        if (!/[0-9]/.test(event.key) && event.key !== 'Backspace') {
            event.preventDefault();
        }
    };

    const onNameKeyDown = (event: KeyboardEvent) => {
        if (!/[A-Z]|[a-z]|[А-Я]|[а-я]/.test(event.key)) {
            event.preventDefault();
        }
    };

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Avatar
                    src={data?.avatar}
                    alt={`${data?.firstname} ${data?.lastname}`}
                    size={200}
                />
                <Textarea
                    className={cls.textarea}
                    placeholder={t('Описание')}
                    value={data?.description}
                    readonly={readonly}
                    onChange={onDescriptionChange}
                />
            </div>
            <div className={cls.data}>
                <div className={cls.left}>
                    <Input
                        className={cls.input}
                        placeholder={t('Имя')}
                        value={data?.firstname}
                        readonly={readonly}
                        onChange={onFirstnameChange}
                        onKeyDown={onNameKeyDown}
                    />
                    <Input
                        className={cls.input}
                        placeholder={t('Фамилия')}
                        value={data?.lastname}
                        readonly={readonly}
                        onChange={onLastnameChange}
                        onKeyDown={onNameKeyDown}
                    />
                    <Input
                        className={cls.input}
                        placeholder={t('Имя пользователя')}
                        value={data?.username}
                        readonly={readonly}
                        onChange={onUsernameChange}
                    />
                    <Input
                        className={cls.input}
                        placeholder={t('Возраст')}
                        value={data?.age}
                        readonly={readonly}
                        onChange={onAgeChange}
                        onKeyDown={onAgeKeyDown}
                    />
                </div>
                <div className={cls.right}>
                    <Input
                        className={cls.input}
                        placeholder={t('Ссылка на аватар')}
                        value={data?.avatar}
                        readonly={readonly}
                        onChange={onAvatarChange}
                    />
                    <CountrySelect
                        className={cls.input}
                        value={data?.country}
                        readonly={readonly}
                        onChange={onCountryChange}
                    />
                    <Input
                        className={cls.input}
                        placeholder={t('Город')}
                        value={data?.city}
                        readonly={readonly}
                        onChange={onCityChange}
                    />
                    <CurrencySelect
                        className={cls.input}
                        value={data?.currency}
                        readonly={readonly}
                        onChange={onCurrencyChange}
                    />
                </div>
            </div>
        </div>
    );
};
