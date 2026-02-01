import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'features/ui/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'features/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import Home from 'shared/assets/icons/home.svg';
import Info from 'shared/assets/icons/info.svg';
import Avatar from 'shared/assets/icons/avatar.svg';
import Title from 'shared/assets/icons/vector.svg';
import { RoutePath } from 'shared/config/rootConfig/rootConfig';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const toggle = () => {
        setCollapsed((prev) => !prev);
    };
    
    const { t } = useTranslation();

    return (
        <div
            data-testid="sidebar"
            className={classNames(
                cls.Sidebar,
                { [cls.collapsed]: collapsed },
                [className],
            )}
        >
            <div className={cls.items}>
                <AppLink
                    to={RoutePath.main}
                    className={cls.item}
                    variant={AppLinkTheme.PRIMARY}
                >
                    <Home className={cls.icon} />
                    <span className={cls.link}>
                        {t('Главная')}
                    </span>
                </AppLink>
                <AppLink
                    to={RoutePath.about}
                    className={cls.item}
                    variant={AppLinkTheme.PRIMARY}
                >
                    <Info className={cls.icon} />
                    <span className={cls.link}>
                        {t('О сайте')}
                    </span>
                </AppLink>
                <AppLink
                    to={RoutePath.about}
                    className={cls.item}
                    variant={AppLinkTheme.PRIMARY}
                >
                    <Avatar className={cls.icon} />
                    <span className={cls.link}>
                        {t('Профиль')}
                    </span>
                </AppLink>
                <AppLink
                    to={RoutePath.about}
                    className={cls.item}
                    variant={AppLinkTheme.PRIMARY}
                >
                    <Title className={cls.icon} />
                    <span className={cls.link}>
                        {t('Статьи')}
                    </span>
                </AppLink>
            </div>
            <Button
                data-testid="sidebar-toggle"
                variant={ButtonTheme.CLEAR}
                onClick={toggle}
                className={cls.collapsedButton}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>
        </div>
    );
};
