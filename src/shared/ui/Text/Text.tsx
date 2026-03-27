import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
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

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    variant?: TextTheme;
    align?: TextAlign;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        variant = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
    } = props;
    
    const additional: Array<string | undefined> = [
        className,
        cls[variant],
        cls[align],
    ];
    
    return (
        <div className={classNames(cls.Text, {}, additional)}>
            {title && <div className={cls.title}>{title}</div>}
            {text && <div className={cls.text}>{text}</div>}
        </div>
    );
});

Text.displayName = 'Text';
