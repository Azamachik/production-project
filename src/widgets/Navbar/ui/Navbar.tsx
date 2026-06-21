import { getUserAuthData } from 'entities/User';
import { userActions } from 'entities/User/model/slices/userSlice';
import { LoginModal } from 'features/AuthByUsername';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const handleClose = useCallback(() => {
        setIsAuthModalOpen(false);
    }, []);

    const handleOpen = useCallback(() => {
        setIsAuthModalOpen(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const items = [
        {
            value: t('Профиль'),
            href: `${RoutePath.profile}${authData?.id}`,
        },
        {
            value: t('Выйти'),
            onClick: onLogout,
        },
    ];

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Dropdown
                    className={cls.links}
                    items={items}
                    trigger={<Avatar src={authData.avatar} size={30} />}
                />
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
