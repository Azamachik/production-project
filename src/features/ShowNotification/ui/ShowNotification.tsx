import { memo, useCallback, useState } from 'react';

import { NotificationList } from '@/entities/Notification';
import NotificationIcon from '@/shared/assets/icons/notify.svg';
import { useDeviceDetect } from '@/shared/lib/hooks/useDeviceDetect/useDeviceDetect';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Drawer } from '@/shared/ui/Drawer';
import { Popover } from '@/shared/ui/Popup';

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
