import { Popover as HPopover } from '@headlessui/react';
import { ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Popover.module.scss';
import popupCls from '../common/popup.module.scss';
import { DropdownDirection, mapDirectionClasses } from '../common/popupConsts';

interface PopoverProps {
    children: ReactNode;
    className?: string;
    trigger: ReactNode;
    direction?: DropdownDirection;
}

export function Popover(props: PopoverProps) {
    const { children, className, trigger, direction = 'bottom left' } = props;

    const classes = [mapDirectionClasses[direction]];

    return (
        <HPopover className={classNames('', {}, [className, popupCls.popup])}>
            <HPopover.Button className={popupCls.trigger}>
                {trigger}
            </HPopover.Button>
            <HPopover.Panel className={classNames(cls.panel, {}, classes)}>
                {children}
            </HPopover.Panel>
        </HPopover>
    );
}
