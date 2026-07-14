import { memo, useCallback, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { HStack, VStack } from '@/shared/ui/Stack';

import cls from './Sidebar.module.scss';

import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';

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
        () =>
            sidebarItemsList.map((item) => (
                <SidebarItem
                    key={item.path}
                    item={item}
                    collapsed={collapsed}
                />
            )),
        [collapsed, sidebarItemsList],
    );

    return (
        <section
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <VStack
                role="navigation"
                gap="32"
                justify="center"
                className={cls.items}
            >
                {itemsList}
            </VStack>
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
            <HStack
                justify="center"
                align="center"
                max
                className={cls.switchers}
            >
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </HStack>
        </section>
    );
});

Sidebar.displayName = 'Sidebar';
