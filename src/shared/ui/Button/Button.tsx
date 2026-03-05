import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
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
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        variant,
        size = ButtonSize.M,
        square,
        disabled,
        ...otherProps
    } = props;
    
    const mods: Record<string, boolean> = {
        [cls.square]: square,
        [cls.disabled]: disabled,
    };
    
    const additional: string[] = [
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
};
