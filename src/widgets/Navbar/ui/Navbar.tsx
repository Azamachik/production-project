import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export function Navbar({ className }: NavbarProps) {
    const { t } = useTranslation();
    
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    
    const handleClose = () => {
        setIsAuthModalOpen(false);
    };
    
    const handleOpen = () => {
        setIsAuthModalOpen(true);
    };
    
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                className={cls.links}
                variant={ButtonTheme.CLEAR}
                onClick={handleOpen}
            >
                {t('Войти')}
            </Button>
            <LoginModal
                isOpen={isAuthModalOpen}
                onClose={handleClose}
            />
        </div>
    );
}
