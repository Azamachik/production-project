import { classNames } from 'shared/lib/classNames/classNames';
import {
    memo, useCallback, useMemo, useState, 
} from 'react';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { LangSwitcher } from 'features/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { SidebarItem } from 'widgets/Sidebar/ui/SidebarItem/SidebarItem';
import { SidebarItemsList } from 'widgets/Sidebar/model/types/items';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const toggle = useCallback(() => {
        setCollapsed((prev) => !prev);
    }, []);
    
    const itemsList = useMemo(
        () => SidebarItemsList.map((item) => (
            <SidebarItem
                key={item.path}
                item={item}
                collapsed={collapsed}
            />
        )),
        [collapsed],
    );
    
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
                {itemsList}
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
});

Sidebar.displayName = 'Sidebar';
