import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';

import { VStack } from 'shared/ui/Stack/VStack/VStack';
import { Comment } from '../../model/types/comment';
import { CommentItem } from '../CommentItem/CommentItem';

import cls from './CommentList.module.scss';

interface CommentListProps {
    className?: string;
    comments: Comment[];
    isLoading: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
    const { className, comments, isLoading } = props;
    const { t } = useTranslation();

    return (
        <VStack
            max
            gap="16"
            className={classNames(cls.CommentList, {}, [className])}
        >
            {comments.length ? (
                comments.map((comment) => (
                    <CommentItem
                        key={comment.id}
                        className={cls.comment}
                        comment={comment}
                        isLoading={isLoading}
                    />
                ))
            ) : (
                <Text title={t('Комментарии отсутствуют')} />
            )}
        </VStack>
    );
});

CommentList.displayName = 'CommentList';
