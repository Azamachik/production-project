import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { Skeleton } from '@/shared/ui/Skeleton';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import cls from './CommentItem.module.scss';

import { Comment } from '../../model/types/comment';

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
        <VStack
            className={classNames(cls.CommentItem, {}, [className])}
            max
            gap="8"
        >
            <AppLink to={`/profile/${comment.user?.id}`} className={cls.header}>
                <Avatar
                    alt={t('Аватар')}
                    src={comment.user?.avatar}
                    size={30}
                />
                <Text title={comment.user?.username} />
            </AppLink>
            <Text text={comment.text} />
        </VStack>
    );
});

CommentItem.displayName = 'CommentItem';
