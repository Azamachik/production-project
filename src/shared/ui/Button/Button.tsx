import { classNames, Mods } from 'shared/lib/classNames/classNames';
import {
    ButtonHTMLAttributes, memo, ReactNode,
} from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
    DANGER = 'danger',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonTheme;
    size?: ButtonSize;
    square?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        variant = ButtonTheme.OUTLINE,
        size = ButtonSize.M,
        square,
        disabled,
        ...otherProps
    } = props;
    
    const mods: Mods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
    };
    
    const additional: Array<string | undefined> = [
        className,
        cls[variant],
        cls[size],
    ];
    
    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, additional)}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});

Button.displayName = 'Button';
