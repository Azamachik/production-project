import { ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Card.module.scss';

interface CardProps {
    className?: string;
    children: ReactNode;
    onClick?: () => void;
}

export const Card = (props: CardProps) => {
    const { className, children, onClick } = props;

    return (
        <div
            className={classNames(cls.Card, {}, [className])}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

Card.displayName = 'Card';
