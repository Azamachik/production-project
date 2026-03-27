import { classNames, Mods } from 'shared/lib/classNames/classNames';
import {
    ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import cls from './Input.module.scss';

type InputHTMLProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends InputHTMLProps {
    className?: string;
    type?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    autoFocus?: boolean;
    placeholder?: string;
    required?: boolean;
    readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        type = 'text',
        value,
        onChange,
        autoFocus,
        required,
        placeholder,
        readonly,
        ...otherProps
    } = props;
    const [isFocused, setIsFocused] = useState(false);
    const ref = useRef<HTMLInputElement>(null);
    
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value);
    };
    
    const onFocus = () => {
        setIsFocused(true);
    };
    
    const onBlur = () => {
        setIsFocused(false);
    };
    
    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autoFocus]);
    
    const mods: Mods = {
        [cls.readonly]: readonly,
    };
    
    return (
        <div className={classNames(cls.Input, mods, [className])}>
            <input
                data-testid="input"
                ref={ref}
                type={type}
                value={value}
                onChange={handleChange}
                onFocus={onFocus}
                onBlur={onBlur}
                placeholder=""
                required={required}
                readOnly={readonly}
                {...otherProps}
            />
            <span
                data-testid="input-placeholder"
                className={cls.placeholder}
            >
                {placeholder}
            </span>
        </div>
    );
});

Input.displayName = 'Input';
