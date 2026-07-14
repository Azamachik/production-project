import { Listbox as HListbox } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Listbox.module.scss';

import { Button, ButtonTheme } from '../../Button/Button';
import { DropdownDirection, mapDirectionClasses } from '../common/popupConsts';

interface ListboxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListboxProps {
    className?: string;
    items?: ListboxItem[];
    value?: string;
    onChange: () => void;
    readonly?: boolean;
    label?: string;
    direction?: DropdownDirection;
}

export function Listbox(props: ListboxProps) {
    const {
        className,
        items,
        value = 'Выберите',
        onChange,
        readonly,
        label,
        direction = 'bottom left',
    } = props;

    const classes = [mapDirectionClasses[direction]];

    return (
        <div className={classNames(cls.ListBox, {}, [className])}>
            {label && (
                <span
                    className={classNames(
                        cls.label,
                        { [cls.disabled]: readonly },
                        [],
                    )}
                >{`${label}`}</span>
            )}
            <HListbox as="div" value={value} onChange={onChange}>
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
