import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { RoutePath } from '@/app/providers/router/config/routeConfig';
import { getUserAuthData, userActions } from '@/entities/User';
import {
    isUserAdmin,
    isUserManager,
} from '@/entities/User/model/selectors/getUserRoles/getUserRoles';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Avatar } from '@/shared/ui/Avatar';
import { Dropdown } from '@/shared/ui/Popup';

import cls from './AvatarDropdown.module.scss';

export const AvatarDropdown = () => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const hasAccessToAdminPanel = isAdmin || isManager;

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const items = [
        ...(hasAccessToAdminPanel
            ? [
                  {
                      value: t('Админка'),
                      href: RoutePath.admin,
                  },
              ]
            : []),
        {
            value: t('Профиль'),
            href: `${RoutePath.profile}${authData?.id}`,
        },
        {
            value: t('Выйти'),
            onClick: onLogout,
        },
    ];

    return (
        <Dropdown
            className={cls.links}
            items={items}
            trigger={<Avatar src={authData?.avatar} size={30} />}
        />
    );
};
