import { classNames, Mods } from 'shared/lib/classNames/classNames';
import {
    ChangeEvent, memo, useRef, useState, TextareaHTMLAttributes,
} from 'react';
import cls from './Textarea.module.scss';

type TextareaHTMLProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'value' | 'onChange'>;

interface TextareaProps extends TextareaHTMLProps {
    className?: string;
    content?: string;
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    required?: boolean;
    readonly?: boolean;
}

export const Textarea = memo((props: TextareaProps) => {
    const {
        className,
        value,
        onChange,
        required,
        placeholder,
        readonly,
        ...otherProps
    } = props;
    
    const [isFocused, setIsFocused] = useState(false);
    const ref = useRef<HTMLInputElement>(null);
    
    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        onChange?.(event.target.value);
    };
    
    const onFocus = () => {
        setIsFocused(true);
    };
    
    const onBlur = () => {
        setIsFocused(false);
    };
    
    const mods: Mods = {
        [cls.readonly]: readonly,
    };
    
    return (
        <div className={classNames(cls.Textarea, mods, [className])}>
            <textarea
                data-testid="textarea"
                value={value}
                required={required}
                readOnly={readonly}
                onChange={handleChange}
                {...otherProps}
            />
            <span
                data-testid="textarea-placeholder"
                className={cls.placeholder}
            >
                {placeholder}
            </span>
        </div>
    );
});

Textarea.displayName = 'Textarea';
