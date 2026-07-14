import {
    ForwardedRef,
    forwardRef,
    MutableRefObject,
    ReactNode,
    UIEvent,
    useImperativeHandle,
    useRef,
} from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { StateSchema } from '@/app/providers/StoreProvider';
import { getScrollByPath, scrollActions } from '@/features/ScrollSave';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle';

import cls from './Page.module.scss';

interface PageProps {
    className?: string;
    children?: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = forwardRef(
    (props: PageProps, ref: ForwardedRef<HTMLElement>) => {
        const { className, children, onScrollEnd } = props;
        const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
        const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
        const dispatch = useAppDispatch();

        // отдаём DOM-элемент скролл-контейнера наружу (для customScrollParent у Virtuoso)
        useImperativeHandle(ref, () => wrapperRef.current, []);

        const { pathname } = useLocation();
        const scrollPosition = useSelector((state: StateSchema) =>
            getScrollByPath(state, pathname),
        );

        useInfiniteScroll({
            triggerRef,
            wrapperRef,
            callback: onScrollEnd,
        });

        useInitialEffect(() => {
            wrapperRef.current.scrollTop = scrollPosition;
        });

        const onScroll = useThrottle((event: UIEvent<HTMLDivElement>) => {
            dispatch(
                scrollActions.setScrollPosition({
                    path: pathname,
                    position: event.currentTarget.scrollTop,
                }),
            );
        }, 800);

        return (
            <main
                ref={wrapperRef}
                className={classNames(cls.Page, {}, [className])}
                onScroll={onScroll}
            >
                {children}
                {onScrollEnd && (
                    <div className={cls.triggerRef} ref={triggerRef} />
                )}
            </main>
        );
    },
);
