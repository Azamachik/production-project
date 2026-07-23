import { useMemo } from 'react';

import AvatarIcon from '@/shared/assets/icons/avatar.svg';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Avatar.module.scss';

import { AppImage } from '../AppImage/AppImage';
import { Skeleton } from '../Skeleton';

interface AvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    size?: number;
}

export const Avatar = (props: AvatarProps) => {
    const { className, src, alt, size } = props;

    const styles = useMemo(
        () => ({
            width: size || 100,
            height: size || 100,
        }),
        [size],
    );

    const loadingFallback = (
        <Skeleton width={size} height={size} borderRadius="50%" />
    );
    const errorFallback = <AvatarIcon />;

    return (
        <AppImage
            className={classNames(cls.Avatar, {}, [className])}
            src={src}
            alt={alt}
            style={styles}
            loadingFallback={loadingFallback}
            errorFallback={errorFallback}
        />
    );
};
