import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { userActions } from 'entities/User/model/slices/userSlice';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export function Navbar({ className }: NavbarProps) {
    const { t } = useTranslation();
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();
    
    const handleClose = () => {
        setIsAuthModalOpen(false);
    };
    
    const handleOpen = () => {
        setIsAuthModalOpen(true);
    };
    
    const onLogout = () => {
        dispatch(userActions.logout());
    };
    
    if (authData) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <Button
                    className={cls.links}
                    variant={ButtonTheme.CLEAR}
                    onClick={onLogout}
                >
                    {t('Выйти')}
                </Button>
            </div>
        );
    }
    
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                className={cls.links}
                variant={ButtonTheme.CLEAR}
                onClick={handleOpen}
            >
                {t('Войти')}
            </Button>
            {isAuthModalOpen && (
                <LoginModal
                    isOpen={isAuthModalOpen}
                    onClose={handleClose}
                />
            )}
        </div>
    );
}
