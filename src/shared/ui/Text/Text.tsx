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
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    [TextSize.S]: 'h3',
    [TextSize.M]: 'h2',
    [TextSize.L]: 'h1',
};

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    variant?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
    'data-testid'?: string;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        variant = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
        'data-testid': dataTestId,
    } = props;

    const additional: Array<string | undefined> = [
        className,
        cls[variant],
        cls[align],
        cls[size],
    ];

    const HeaderTag = mapSizeToHeaderTag[size];

    return (
        <div className={classNames(cls.Text, {}, additional)}>
            {title && (
                <HeaderTag
                    className={cls.title}
                    data-testid={`${dataTestId}.Header`}
                >
                    {title}
                </HeaderTag>
            )}
            {text && (
                <p className={cls.text} data-testid={`${dataTestId}.Paragraph`}>
                    {text}
                </p>
            )}
        </div>
    );
});

Text.displayName = 'Text';
