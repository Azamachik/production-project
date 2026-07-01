import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ReactNode, useCallback, useEffect, useState } from 'react';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import cls from './Drawer.module.scss';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

export const Drawer = (props: DrawerProps) => {
    const { className, children, isOpen, onClose, lazy } = props;
    const { isMounted, isClosed, close } = useModal({
        animationDelay: 300,
        onClose,
        isOpen,
    });
    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.closed]: isClosed,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div
                className={classNames(cls.Drawer, mods, [
                    className,
                    'app_drawer',
                ])}
            >
                <Overlay onClose={close} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    );
};
