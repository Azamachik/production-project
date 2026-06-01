import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    ReducersList,
    useDynamicModuleLoad,
} from 'shared/lib/hooks/useDynamicModuleLoad/useDynamicModuleLoad';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';

import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slices/loginSlice';

import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
    onSuccess?: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);

    useDynamicModuleLoad(initialReducers, true);

    const onClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess?.();
        }
    }, [onSuccess, dispatch, username, password]);

    const onUsernameChange = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );

    const onPasswordChange = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text className={cls.centered} title={t('Форма авторизации')} />
            {error && (
                <Text
                    className={cls.centered}
                    variant={TextTheme.DANGER}
                    text={t('Неправильный логин или пароль')}
                />
            )}
            <Input
                autoFocus
                placeholder={t('Введите имя пользователя')}
                type="email"
                onChange={onUsernameChange}
                value={username}
            />
            <Input
                placeholder={t('Введите пароль')}
                type="password"
                onChange={onPasswordChange}
                value={password}
            />
            <Button
                variant={ButtonTheme.OUTLINE}
                onClick={onClick}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});

export default LoginForm;
