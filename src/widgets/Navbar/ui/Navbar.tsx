import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { LoginModal } from '@/features/AuthByUsername';
import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { HStack } from '@/shared/ui/Stack';
import { ShowNotification } from '@/features/ShowNotification';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const authData = useSelector(getUserAuthData);
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = useCallback(() => {
        setIsAuthModalOpen(false);
    }, []);

    const handleOpen = useCallback(() => {
        setIsAuthModalOpen(true);
    }, []);

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <HStack className={cls.actions} gap="8">
                    <ShowNotification />
                    <AvatarDropdown />
                </HStack>
            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button
                className={cls.links}
                variant={ButtonTheme.CLEAR}
                onClick={handleOpen}
            >
                {t('Войти')}
            </Button>
            {isAuthModalOpen && (
                <LoginModal isOpen={isAuthModalOpen} onClose={handleClose} />
            )}
        </header>
    );
});

Navbar.displayName = 'Navbar';
