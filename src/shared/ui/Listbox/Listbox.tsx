import { Listbox as HListbox } from '@headlessui/react';
import { Fragment, ReactNode, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Listbox.module.scss';
import { Button, ButtonTheme } from '../Button/Button';

interface ListboxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

type DropdownDirection =
    | 'bottom left'
    | 'bottom right'
    | 'top right'
    | 'top left';

interface ListboxProps {
    className?: string;
    items?: ListboxItem[];
    value?: string;
    onChange: () => void;
    readonly?: boolean;
    label?: string;
    direction?: DropdownDirection;
}

const mapDirectionClasses: Record<DropdownDirection, string> = {
    'bottom left': cls.bottomLeft,
    'bottom right': cls.bottomRight,
    'top left': cls.topLeft,
    'top right': cls.topRight,
};

export function Listbox(props: ListboxProps) {
    const {
        className,
        items,
        value = 'Выберите',
        onChange,
        readonly,
        label,
        direction = 'bottom right',
    } = props;

    const classes = [mapDirectionClasses[direction]];

    return (
        <div className={cls.wrapper}>
            {label && (
                <span
                    className={classNames(
                        cls.label,
                        { [cls.disabled]: readonly },
                        [],
                    )}
                >{`${label}`}</span>
            )}
            <HListbox
                as="div"
                className={classNames(cls.ListBox, {}, [className])}
                value={value}
                onChange={onChange}
            >
                <HListbox.Button className={cls.trigger}>
                    <Button disabled={readonly} variant={ButtonTheme.CLEAR}>
                        {value}
                    </Button>
                </HListbox.Button>
                <HListbox.Options
                    className={classNames(cls.options, {}, classes)}
                >
                    {items?.map((item) => (
                        <HListbox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(cls.item, {
                                        [cls.active]: selected,
                                        [cls.disabled]: item.disabled,
                                    })}
                                >
                                    {item.content}
                                </li>
                            )}
                        </HListbox.Option>
                    ))}
                </HListbox.Options>
            </HListbox>
        </div>
    );
}
