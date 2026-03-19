import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    DANGER = 'danger',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    variant?: TextTheme;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        variant = TextTheme.PRIMARY,
    } = props;
    
    const additional: Array<string | undefined> = [
        className,
        cls[variant],
    ];
    
    return (
        <div className={classNames(cls.Text, {}, additional)}>
            {title && <div className={cls.title}>{title}</div>}
            {text && <div className={cls.text}>{text}</div>}
        </div>
    );
});

Text.displayName = 'Text';
