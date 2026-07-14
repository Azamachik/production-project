import { HTMLAttributes, ReactNode } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Card.module.scss';

export enum CardVariants {
    PRIMARY = 'primary',
    OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    variant?: CardVariants;
    max?: boolean;
}

export const Card = (props: CardProps) => {
    const {
        className,
        children,
        variant = CardVariants.PRIMARY,
        max = false,
        ...otherProps
    } = props;

    return (
        <div
            className={classNames(cls.Card, { [cls.max]: max }, [
                className,
                cls[variant],
            ])}
            {...otherProps}
        >
            {children}
        </div>
    );
};

Card.displayName = 'Card';
