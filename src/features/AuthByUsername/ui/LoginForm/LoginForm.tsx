import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';
import { memo } from 'react';
import { loginActions } from '../../model/slices/loginSlice';
import cls from './LoginForm.module.scss';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username, password, isLoading, error,
    } = useSelector(getLoginState);

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
