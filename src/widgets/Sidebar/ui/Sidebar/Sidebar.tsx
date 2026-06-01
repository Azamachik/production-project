import { LangSwitcher } from 'features/LangSwitcher';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { memo, useCallback, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';

import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';

import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const sidebarItemsList = useSelector(getSidebarItems);

    const toggle = useCallback(() => {
        setCollapsed((prev) => !prev);
    }, []);

    const itemsList = useMemo(
        () => sidebarItemsList.map((item) => <SidebarItem key={item.path} item={item} collapsed={collapsed} />),
        [collapsed, sidebarItemsList],
    );

    return (
        <aside data-testid='sidebar' className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <nav className={cls.items}>{itemsList}</nav>
            <Button
                data-testid='sidebar-toggle'
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
        </aside>
    );
});

Sidebar.displayName = 'Sidebar';
