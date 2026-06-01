import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text } from 'shared/ui/Text/Text';

import { Comment } from '../../model/types/comment';

import cls from './CommentItem.module.scss';

interface CommentItemProps {
    className?: string;
    comment: Comment;
    isLoading: boolean;
}

export const CommentItem = memo((props: CommentItemProps) => {
    const { className, comment, isLoading } = props;
    const { t } = useTranslation('article-details');

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentItem, {}, [className])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} borderRadius="50%" />
                    <Skeleton width={100} height={20} />
                </div>
                <Skeleton />
            </div>
        );
    }

    return (
        <div className={classNames(cls.CommentItem, {}, [className])}>
            <AppLink to={`/profile/${comment.user?.id}`} className={cls.header}>
                <Avatar
                    alt={t('Аватар')}
                    src={comment.user?.avatar}
                    size={30}
                />
                <Text title={comment.user?.username} />
            </AppLink>
            <Text text={comment.text} />
        </div>
    );
});

CommentItem.displayName = 'CommentItem';
