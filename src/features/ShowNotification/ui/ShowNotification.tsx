import { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import NotificationIcon from 'shared/assets/icons/notify.svg';
import { Popover } from 'shared/ui/Popup';
import { NotificationList } from 'entities/Notification';
import { useDeviceDetect } from 'shared/lib/hooks/useDeviceDetect/useDeviceDetect';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import cls from './ShowNotification.module.scss';

interface ShowNotificationProps {
    className?: string;
}

export const ShowNotification = memo((props: ShowNotificationProps) => {
    const { className } = props;
    const isTouchDevice = useDeviceDetect();
    const [isOpen, setIsOpen] = useState(false);

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    const trigger = (
        <Button onClick={onOpenDrawer} variant={ButtonTheme.CLEAR}>
            <NotificationIcon />
        </Button>
    );
    if (isTouchDevice) {
        return (
            <>
                {trigger}
                <Drawer
                    className={className}
                    isOpen={isOpen}
                    onClose={onCloseDrawer}
                >
                    <NotificationList className={cls.ShowNotificationMobile} />
                </Drawer>
            </>
        );
    }

    return (
        <Popover className={className} trigger={trigger}>
            <NotificationList className={cls.ShowNotification} />
        </Popover>
    );
});
