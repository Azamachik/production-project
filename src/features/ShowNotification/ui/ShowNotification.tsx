import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import NotificationIcon from 'shared/assets/icons/notify.svg';
import { Popover } from 'shared/ui/Popup';
import { NotificationList } from 'entities/Notification';
import cls from './ShowNotification.module.scss';

interface ShowNotificationProps {
    className?: string;
}

export const ShowNotification = memo((props: ShowNotificationProps) => {
    const { className } = props;

    return (
        <Popover
            trigger={
                <Button variant={ButtonTheme.CLEAR}>
                    <NotificationIcon />
                </Button>
            }
        >
            <NotificationList className={cls.ShowNotification} />
        </Popover>
    );
});
