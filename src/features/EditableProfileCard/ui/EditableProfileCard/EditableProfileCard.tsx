import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileCard } from 'entities/Profile';
import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    ReducersList,
    useDynamicModuleLoad,
} from 'shared/lib/hooks/useDynamicModuleLoad/useDynamicModuleLoad';
import { Text, TextTheme } from 'shared/ui/Text/Text';

import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileFormData } from '../../model/selectors/getProfileFormData/getProfileFormData';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import {
    profileActions,
    profileReducer,
} from '../../model/slices/profileSlices';
import { EditableProfileCardControlPanel } from '../EditableProfileCardControlPanel/EditableProfileCardControlPanel';

import cls from './EditableProfileCard.module.scss';
import { ValidateProfileError } from '../../model/consts/consts';

interface EditableProfileCardProps {
    className?: string;
    id?: string;
}

const initialReducers: ReducersList = {
    profile: profileReducer,
};

export const EditableProfileCard = ({
    className,
    id,
}: EditableProfileCardProps) => {
    const { t } = useTranslation('profile');
    const formData = useSelector(getProfileFormData);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const isLoading = useSelector(getProfileIsLoading);
    const validateErrors = useSelector(getProfileValidateErrors);
    const dispatch = useAppDispatch();

    if (!id) {
        return <Text text={t('Ошибка при загрузке профиля!')} />;
    }

    const validateErrorTranslates = {
        [ValidateProfileError.SERVER_ERROR]: t(
            'Ошибка на сервере при сохранении',
        ),
        [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
        [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t(
            'Имя и фамилия обязательны',
        ),
    };

    useDynamicModuleLoad(initialReducers, true);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            if (id) {
                dispatch(fetchProfileData(id));
            }
        }
        // eslint-disable-next-line
    }, []);

    const onFirstnameChange = useCallback(
        (value: string) => {
            dispatch(
                profileActions.updateProfile({
                    firstname: value,
                }),
            );
        },
        [dispatch],
    );

    const onLastnameChange = useCallback(
        (value: string) => {
            dispatch(
                profileActions.updateProfile({
                    lastname: value,
                }),
            );
        },
        [dispatch],
    );

    const onUsernameChange = useCallback(
        (value: string) => {
            dispatch(
                profileActions.updateProfile({
                    username: value,
                }),
            );
        },
        [dispatch],
    );

    const onAgeChange = useCallback(
        (value: string) => {
            dispatch(
                profileActions.updateProfile({
                    age: Number(value),
                }),
            );
        },
        [dispatch],
    );

    const onCityChange = useCallback(
        (value: string) => {
            dispatch(
                profileActions.updateProfile({
                    city: value,
                }),
            );
        },
        [dispatch],
    );

    const onDescriptionChange = useCallback(
        (value: string) => {
            dispatch(
                profileActions.updateProfile({
                    description: value,
                }),
            );
        },
        [dispatch],
    );

    const onAvatarChange = useCallback(
        (value: string) => {
            dispatch(
                profileActions.updateProfile({
                    avatar: value,
                }),
            );
        },
        [dispatch],
    );

    const onCurrencyChange = useCallback(
        (value?: Currency) => {
            dispatch(
                profileActions.updateProfile({
                    currency: value,
                }),
            );
        },
        [dispatch],
    );

    const onCountryChange = useCallback(
        (value?: Country) => {
            dispatch(
                profileActions.updateProfile({
                    country: value,
                }),
            );
        },
        [dispatch],
    );

    return (
        <div
            className={classNames(cls.EditableProfileCard, {}, [
                className,
                cls.centered,
            ])}
        >
            {validateErrors?.length &&
                validateErrors.map((error) => (
                    <Text
                        key={error}
                        title={validateErrorTranslates[error]}
                        variant={TextTheme.DANGER}
                        data-testid="EditableProfileCard.Error"
                    />
                ))}
            <ProfileCard
                className={cls.centered}
                data={formData}
                readonly={readonly}
                isLoading={isLoading}
                error={error}
                onFirstnameChange={onFirstnameChange}
                onLastnameChange={onLastnameChange}
                onUsernameChange={onUsernameChange}
                onAgeChange={onAgeChange}
                onCityChange={onCityChange}
                onAvatarChange={onAvatarChange}
                onCurrencyChange={onCurrencyChange}
                onCountryChange={onCountryChange}
                onDescriptionChange={onDescriptionChange}
            />
            <EditableProfileCardControlPanel
                readonly={readonly}
                isLoading={isLoading}
                error={error}
            />
        </div>
    );
};
