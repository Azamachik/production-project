import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

import cls from './ArticleListItem.module.scss';
import { ArticleView } from '../../model/consts/consts';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = (
    props: ArticleListItemSkeletonProps,
) => {
    const { className, view } = props;

    if (view === ArticleView.LIST) {
        return (
            <div
                className={classNames(cls.ArticleListItem, {}, [
                    className,
                    cls[view],
                ])}
            >
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Skeleton width={30} height={30} borderRadius="50%" />
                        <Skeleton width={150} height={16} />
                        <Skeleton width={100} height={16} />
                    </div>
                    <Skeleton width="100%" height={40} className={cls.title} />
                    <Skeleton width="100%" height={24} className={cls.types} />
                    <Skeleton width="100%" height={200} className={cls.image} />
                    <Skeleton
                        width="100%"
                        height={100}
                        className={cls.textBlock}
                    />
                    <div className={cls.footer}>
                        <Skeleton width={100} height={30} />
                        <span className={cls.viewsIcon}>
                            <Skeleton width={50} height={20} />
                        </span>
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div
            className={classNames(cls.ArticleListItem, {}, [
                className,
                cls[view],
            ])}
        >
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <Skeleton width="100%" className={cls.image} />
                </div>
                <div className={cls.infoWrapper}>
                    <Skeleton width="100%" height={24} className={cls.types} />
                </div>
                <Skeleton width="100%" height={30} className={cls.title} />
            </Card>
        </div>
    );
};
