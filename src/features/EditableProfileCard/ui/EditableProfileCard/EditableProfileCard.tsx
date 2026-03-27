import { classNames } from 'shared/lib/classNames/classNames';
import { ProfileCard } from 'entities/Profile';
import { useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ReducersList, useDynamicModuleLoad } from 'shared/lib/hooks/useDynamicModuleLoad/useDynamicModuleLoad';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { ValidateProfileError } from '../../model/types/EditableProfileCard';
import { profileActions, profileReducer } from '../../model/slices/profileSlices';
import { EditableProfileCardControlPanel } from '../EditableProfileCardControlPanel/EditableProfileCardControlPanel';
import { getProfileFormData } from '../../model/selectors/getProfileFormData/getProfileFormData';
import cls from './EditableProfileCard.module.scss';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';

interface EditableProfileCardProps {
    className?: string;
}

const initialReducers: ReducersList = {
    profile: profileReducer,
};

export const EditableProfileCard = ({ className }: EditableProfileCardProps) => {
    const { t } = useTranslation('profile');
    const formData = useSelector(getProfileFormData);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const isLoading = useSelector(getProfileIsLoading);
    const validateErrors = useSelector(getProfileValidateErrors);
    const dispatch = useAppDispatch();
    
    const validateErrorTranslates = {
        [ValidateProfileError.SERVER_ERROR]: t('Ошибка на сервере при сохранении'),
        [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
        [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Имя и фамилия обязательны'),
    };
    
    useDynamicModuleLoad(initialReducers, true);
    
    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);
    
    const onFirstnameChange = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({
            firstname: value,
        }));
    }, [dispatch]);
    
    const onLastnameChange = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({
            lastname: value,
        }));
    }, [dispatch]);
    
    const onUsernameChange = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({
            username: value,
        }));
    }, [dispatch]);
    
    const onAgeChange = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({
            age: Number(value),
        }));
    }, [dispatch]);
    
    const onCityChange = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({
            city: value,
        }));
    }, [dispatch]);
    
    const onDescriptionChange = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({
            description: value,
        }));
    }, [dispatch]);
    
    const onAvatarChange = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({
            avatar: value,
        }));
    }, [dispatch]);
   
    const onCurrencyChange = useCallback((value?: Currency) => {
        dispatch(profileActions.updateProfile({
            currency: value,
        }));
    }, [dispatch]);
    
    const onCountryChange = useCallback((value?: Country) => {
        dispatch(profileActions.updateProfile({
            country: value,
        }));
    }, [dispatch]);
    
    return (
        <div className={classNames(cls.EditableProfileCard, {}, [className, cls.centered])}>
            {validateErrors?.length && validateErrors.map((error) => (
                <Text
                    key={error}
                    title={validateErrorTranslates[error]}
                    variant={TextTheme.DANGER}
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
