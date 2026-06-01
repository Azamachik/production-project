import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    DANGER = 'danger',
}

export enum TextAlign {
    LEFT = 'left',
    RIGHT = 'right',
    CENTER = 'center',
}

export enum TextSize {
    M = 'size_m',
    L = 'size_l',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    variant?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        variant = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
    } = props;

    const additional: Array<string | undefined> = [
        className,
        cls[variant],
        cls[align],
        cls[size],
    ];

    return (
        <div className={classNames(cls.Text, {}, additional)}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});

Text.displayName = 'Text';
