import { classNames } from 'shared/lib/classNames/classNames';
import {
    MouseEvent, ReactNode, useCallback, useEffect,
} from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';

export interface ModalProps {
    children?: ReactNode;
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Modal = (props: ModalProps) => {
    const {
        children,
        className,
        isOpen,
        onClose,
    } = props;
    
    const handleClose = useCallback(() => {
        if (onClose) {
            onClose();
        }
    }, [onClose]);
    
    const handleContentClick = (event: MouseEvent) => {
        event.stopPropagation();
    };
    
    const onKeyDown = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            event.stopPropagation();
            handleClose();
        }
    }, [handleClose]);
    
    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.closed]: !isOpen,
    };
    
    useEffect(() => {
        window.addEventListener('keydown', onKeyDown);
        
        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [onKeyDown]);
    
    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div
                    className={cls.overlay}
                    onClick={handleClose}
                >
                    <div
                        className={cls.content}
                        onClick={handleContentClick}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
