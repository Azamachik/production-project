import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                autoFocus
                placeholder={t('Имя пользователя')}
                type="email"
            />
            <Input
                placeholder={t('Пароль')}
                type="password"
            />
            <Button variant={ButtonTheme.OUTLINE}>
                {t('Войти')}
            </Button>
        </div>
    );
};
