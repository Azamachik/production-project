import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useState } from 'react';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export function Navbar({ className }: NavbarProps) {
    const { t } = useTranslation();
    
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    
    const handleClose = () => {
        setIsAuthModalOpen((prev) => !prev);
    };
    
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                className={cls.links}
                variant={ButtonTheme.CLEAR}
                onClick={handleClose}
            >
                {t('Войти')}
            </Button>
            <Modal
                isOpen={isAuthModalOpen}
                onClose={handleClose}
            >
                {t('Lorem ipsum dolor')}
            </Modal>
        </div>
    );
}
