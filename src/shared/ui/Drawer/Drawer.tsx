import { ReactNode, useEffect } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import {
    AnimationProvider,
    useAnimationLibs,
} from '@/shared/lib/components/AnimationProvider';
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

const height = window.innerHeight - 100;

export const DrawerContent = (props: DrawerProps) => {
    const { className, children, isOpen, onClose, lazy } = props;
    const { Gesture, Spring } = useAnimationLibs();

    if (!Gesture || !Spring) return null;

    const [{ y }, api] = Spring.useSpring(() => ({ y: height }));
    const open = () => {
        api.start({
            y: 0,
            immediate: false,
        });
    };

    const close = (velocity = 0) => {
        api.start({
            y: height,
            immediate: false,
            config: { ...Spring.config.stiff, velocity },
            onResolve: onClose,
        });
    };

    const bind = Gesture.useDrag(
        ({
            last,
            velocity: [, vy],
            direction: [, dy],
            offset: [, oy],
            cancel,
        }) => {
            if (oy < -70) cancel();

            if (last) {
                oy > height * 0.5 || (vy > 0.5 && dy > 0) ? close(vy) : open();
            } else api.start({ y: oy, immediate: true });
        },
        {
            from: () => [0, y.get()],
            filterTaps: true,
            bounds: { top: 0 },
            rubberband: true,
        },
    );

    const display = y.to((py) => (py < height ? 'block' : 'none'));

    const mods: Mods = {
        [cls.opened]: isOpen,
    };

    useEffect(() => {
        if (isOpen) {
            open();
        }
    }, [isOpen, api, open]);

    if (!isOpen) {
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
                <Overlay onClose={() => close()} />
                <Spring.a.div
                    className={cls.sheet}
                    {...bind()}
                    style={{
                        display,
                        bottom: `calc(-100vh + ${height - 100}px)`,
                        y,
                    }}
                >
                    {children}
                </Spring.a.div>
            </div>
        </Portal>
    );
};

const DrawerAsync = (props: DrawerProps) => {
    const { isLoaded } = useAnimationLibs();

    if (!isLoaded) {
        return null;
    }

    return <DrawerContent {...props} />;
};

export const Drawer = (props: DrawerProps) => (
    <AnimationProvider>
        <DrawerAsync {...props} />
    </AnimationProvider>
);
