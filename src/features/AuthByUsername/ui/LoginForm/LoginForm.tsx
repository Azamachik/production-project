import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { memo } from 'react';
import { ReducersList, useDynamicModuleLoad } from 'shared/lib/hooks/useDynamicModuleLoad/useDynamicModuleLoad';
import { loginActions, loginReducer } from '../../model/slices/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);
    
    useDynamicModuleLoad(initialReducers, true);
    
    const onClick = () => {
        dispatch(loginByUsername({ username, password }));
    };
    
    const onUsernameChange = (value: string) => {
        dispatch(loginActions.setUsername(value));
    };
    
    const onPasswordChange = (value: string) => {
        dispatch(loginActions.setPassword(value));
    };
    
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text
                className={cls.centered}
                title={t('Форма авторизации')}
            />
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
