import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
    className?: string;
}

export const ArticleEditPage = memo((props: ArticleEditPageProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.ArticleEditPage, {}, [className])}>
            ArticleEditPage
        </div>
    );
});

ArticleEditPage.displayName = 'ArticleEditPage';
