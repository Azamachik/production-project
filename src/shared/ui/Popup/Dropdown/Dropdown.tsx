import { Menu } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Fragment, ReactNode } from 'react';
import cls from './Dropdown.module.scss';
import { Button, ButtonTheme } from '../../Button/Button';
import { AppLink } from '../../AppLink/AppLink';
import { DropdownDirection, mapDirectionClasses } from '../common/popupConsts';
import popupCls from '../common/popup.module.scss';

interface DropdownItems {
    value: string;
    onClick?: () => void;
    href?: string;
    disabled?: boolean;
}

interface DropdownProps {
    className?: string;
    items?: DropdownItems[];
    trigger: ReactNode;
    direction?: DropdownDirection;
}

export function Dropdown(props: DropdownProps) {
    const { className, items, trigger, direction = 'bottom left' } = props;

    const classes = [mapDirectionClasses[direction]];

    return (
        <Menu
            as="div"
            className={classNames(cls.Dropdown, {}, [
                className,
                popupCls.popup,
            ])}
        >
            <Menu.Button className={popupCls.trigger}>{trigger}</Menu.Button>
            <Menu.Items className={classNames(cls.items, {}, classes)}>
                {items?.map((item) => {
                    const content = ({ active }: { active: boolean }) => (
                        <Button
                            className={classNames(
                                cls.item,
                                { [cls.active]: active },
                                [className],
                            )}
                            disabled={item.disabled}
                            variant={ButtonTheme.CLEAR}
                            onClick={item.onClick}
                        >
                            {item.value}
                        </Button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item
                                disabled={item.disabled}
                                as={AppLink}
                                to={item.href}
                            >
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item as={Fragment} disabled={item.disabled}>
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
}
