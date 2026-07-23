import {
    ImgHTMLAttributes,
    memo,
    ReactNode,
    useLayoutEffect,
    useState,
} from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './AppImage.module.scss';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    loadingFallback?: ReactNode;
    errorFallback?: ReactNode;
}

export const AppImage = memo((props: AppImageProps) => {
    const {
        className,
        src,
        alt = 'Изображение',
        loadingFallback,
        errorFallback,
        ...otherProps
    } = props;

    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useLayoutEffect(() => {
        const img = new Image();

        img.src = src ?? '';
        img.onload = () => {
            setIsLoading(false);
        };
        img.onerror = () => {
            setIsLoading(false);
            setHasError(true);
        };
    }, [src]);

    if (isLoading && loadingFallback) {
        return loadingFallback;
    }

    if (hasError && errorFallback) {
        return errorFallback;
    }

    return (
        <img
            className={classNames(cls.AppImage, {}, [className])}
            alt={alt}
            src={src}
            {...otherProps}
        />
    );
});

AppImage.displayName = 'AppImage';
