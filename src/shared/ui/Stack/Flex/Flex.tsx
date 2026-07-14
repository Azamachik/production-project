import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

import cls from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexGap = '2' | '4' | '8' | '12' | '16' | '20' | '32';

type DivProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>;

export interface FlexProps extends DivProps {
    className?: string;
    children: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction: FlexDirection;
    gap?: FlexGap;
    max?: boolean;
}

const gapClasses: Record<FlexGap, string> = {
    2: cls.gap2,
    4: cls.gap4,
    8: cls.gap8,
    12: cls.gap12,
    16: cls.gap16,
    20: cls.gap20,
    32: cls.gap32,
};

const justifyClasses: Record<FlexJustify, string> = {
    start: cls.justifyStart,
    center: cls.justifyCenter,
    end: cls.justifyEnd,
    between: cls.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
    start: cls.alignStart,
    center: cls.alignCenter,
    end: cls.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
    row: cls.directionRow,
    column: cls.directionColumn,
};

export const Flex = (props: FlexProps) => {
    const {
        className,
        children,
        justify = 'start',
        align = 'start',
        gap = '4',
        direction = 'row',
        max,
        ...otherProps
    } = props;

    const classes = [
        className,
        gapClasses[gap],
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
    ];

    const mods: Mods = {
        [cls.max]: max,
    };

    return (
        <div className={classNames(cls.Flex, mods, classes)} {...otherProps}>
            {children}
        </div>
    );
};
