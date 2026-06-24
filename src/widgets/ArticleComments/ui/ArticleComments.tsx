import { CommentList } from 'entities/Comment';
import { AddCommentForm } from 'features/AddCommentForm';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { VStack } from 'shared/ui/Stack/VStack/VStack';
import { useGetArticleCommentsQuery } from '../api/articleComments';

interface ArticleCommentsProps {
    className?: string;
    id: string;
    onSend: (value: string) => void;
}

export const ArticleComments = ({
    className,
    id,
    onSend,
}: ArticleCommentsProps) => {
    const { t } = useTranslation('article-details');
    const { data: comments, isLoading } = useGetArticleCommentsQuery(id);

    if (isLoading || !comments) return null;

    return (
        <VStack gap="16" max className={classNames('', {}, [className])}>
            <Text title={t('Комментарии')} />
            <AddCommentForm onSend={onSend} />
            <CommentList isLoading={isLoading} comments={comments} />
        </VStack>
    );
};
