import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import type { Comment } from '../../model/types/comment';
import { CommentItem } from '../CommentItem/CommentItem';

interface CommentListProps {
    className?: string;
    comments: Comment[];
    isLoading: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
    const { className, comments, isLoading } = props;
    const { t } = useTranslation();

    return (
        <VStack max gap="8" className={classNames('', {}, [className])}>
            {comments.length ? (
                comments.map((comment) => (
                    <CommentItem
                        key={comment.id}
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
