import { ChangeEvent, memo, useRef, TextareaHTMLAttributes } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';

import cls from './Textarea.module.scss';

type TextareaHTMLProps = Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    'value' | 'onChange'
>;

interface TextareaProps extends TextareaHTMLProps {
    className?: string;
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

    const ref = useRef<HTMLTextAreaElement>(null);

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        onChange?.(event.target.value);
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    return (
        <textarea
            className={classNames(cls.Textarea, mods, [className])}
            ref={ref}
            data-testid="textarea"
            value={value}
            placeholder={placeholder}
            required={required}
            readOnly={readonly}
            onChange={handleChange}
            {...otherProps}
        />
    );
});

Textarea.displayName = 'Textarea';
