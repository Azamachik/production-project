import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Code } from '@/shared/ui/Code';

import cls from './ArticleCodeBlockComponent.module.scss';

import type { ArticleCodeBlock } from '../../model/types/article';

interface ArticleCodeBlockProps {
    className?: string;
    block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo(
    (props: ArticleCodeBlockProps) => {
        const { className, block } = props;

        return (
            <div
                className={classNames(cls.ArticleCodeBlockComponent, {}, [
                    className,
                ])}
            >
                <Code code={block.code} />
            </div>
        );
    },
);
