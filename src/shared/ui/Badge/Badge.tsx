import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Badge.module.scss';

interface BadgeProps {
    className?: string;
    text: string;
}

export const Badge = memo((props: BadgeProps) => {
    const { className, text } = props;

    return (
        <span className={classNames(cls.Badge, {}, [className])}>{text}</span>
    );
});

Badge.displayName = 'Badge';
