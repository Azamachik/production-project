import { ReactNode } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Card, CardVariants } from '@/shared/ui/Card';

import cls from './Tabs.module.scss';

export interface TabItem {
    value: string;
    content: ReactNode;
}

interface TabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem) => void;
}

export const Tabs = (props: TabsProps) => {
    const { className, tabs, value, onTabClick } = props;

    const handleClick = (tab: TabItem) => () => {
        onTabClick(tab);
    };

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    variant={
                        tab.value === value
                            ? CardVariants.PRIMARY
                            : CardVariants.OUTLINED
                    }
                    className={cls.tab}
                    key={tab.value}
                    onClick={handleClick(tab)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
};

Tabs.displayName = 'Tabs';
