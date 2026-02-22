import { classNames } from 'shared/lib/classNames/classNames';
import {
    ChangeEvent, InputHTMLAttributes, useEffect, useRef, useState,
} from 'react';
import cls from './Input.module.scss';

type InputHTMLProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends InputHTMLProps {
    className?: string;
    type?: string;
    value?: string;
    onChange?: (value: string) => void;
    autoFocus?: boolean;
    placeholder?: string;
    required?: boolean;
}

export const Input = (props: InputProps) => {
    const {
        className,
        type = 'text',
        value,
        onChange,
        autoFocus,
        required,
        placeholder,
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
    
    return (
        <div className={classNames(cls.Input, {}, [className])}>
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
};
