import { MouseEvent, ReactNode } from 'react';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { Portal } from '@/shared/ui/Portal';

import cls from './Modal.module.scss';

import { Overlay } from '../Overlay/Overlay';

export interface ModalProps {
    children?: ReactNode;
    className?: string;
    isOpen?: boolean;
    lazy?: boolean;
    onClose?: () => void;
}

export const Modal = (props: ModalProps) => {
    const { children, className, isOpen, onClose, lazy } = props;
    const { isMounted, isClosed, close } = useModal({
        animationDelay: 300,
        onClose,
        isOpen,
    });

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.closed]: isClosed,
    };

    const onContentClick = (event: MouseEvent) => {
        event.stopPropagation();
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <Overlay onClose={close} />
                {/* <div className={cls.overlay} onClick={close}> */}
                <div className={cls.content} onClick={onContentClick}>
                    {children}
                </div>
                {/* </div> */}
            </div>
        </Portal>
    );
};
