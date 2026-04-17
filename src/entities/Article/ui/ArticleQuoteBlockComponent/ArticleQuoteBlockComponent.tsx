import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import cls from './ArticleQuoteBlockComponent.module.scss';
import { ArticleQuoteBlock } from '../../model/types/article';

interface ArticleQuoteBlockComponentProps {
    className?: string;
    block: ArticleQuoteBlock;
}

export const ArticleQuoteBlockComponent = memo((props: ArticleQuoteBlockComponentProps) => {
    const { className, block } = props;
    
    return (
        <blockquote className={classNames(cls.ArticleQuoteBlockComponent, {}, [className])}>
            <Text text={block.content} />
        </blockquote>
    );
});

ArticleQuoteBlockComponent.displayName = 'ArticleQuoteBlockComponent';
