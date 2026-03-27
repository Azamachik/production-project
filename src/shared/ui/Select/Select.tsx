import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ChangeEvent, useCallback, useMemo } from 'react';
import cls from './Select.module.scss';

export type SelectOption<T extends string> = {
    value: T;
    content: string;
}

interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    value?: T;
    options?: SelectOption<T>[];
    onChange?: (value: T) => void;
    readonly?: boolean;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const {
        className,
        label,
        value,
        options,
        onChange,
        readonly,
    } = props;
    
    const optionList = useMemo(
        () => options?.map((opt: SelectOption<T>) => (
            <option
                key={opt.value}
                className={classNames(cls.option)}
                value={opt.value}
            >
                {opt.content}
            </option>
        )),
        [options],
    );
    
    const handleChange = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(event.target.value as T);
    }, [onChange]);
    
    const mods: Mods = {
        [cls.readonly]: readonly,
    };
    
    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && <span className={cls.label}>{label}</span>}
            <select
                className={cls.select}
                value={value}
                onChange={handleChange}
                disabled={readonly}
            >
                {optionList}
            </select>
        </div>
    );
};
