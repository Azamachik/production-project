import { FC, HTMLAttributeAnchorTarget, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { Virtuoso, VirtuosoGrid } from 'react-virtuoso';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles?: Article[];
    view?: ArticleView;
    isLoading?: boolean;
    target?: HTMLAttributeAnchorTarget;
    onLoadNextPart?: () => void;
    customScrollParent?: HTMLElement;
    virtualized?: boolean;
}

const getSkeletons = (view: ArticleView) =>
    new Array(3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton
                className={cls.card}
                key={index}
                view={ArticleView.LIST}
            />
        ));

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        view = ArticleView.GRID,
        isLoading,
        target,
        onLoadNextPart,
        customScrollParent,
        virtualized = false,
    } = props;

    const renderArticle = useCallback(
        (index: number = 0, article: Article) => (
            <ArticleListItem
                className={cls.card}
                article={article}
                view={view}
                key={article.id}
                target={target}
            />
        ),
        [view, target],
    );

    const Footer = useCallback(() => {
        if (isLoading) {
            return <div className={cls.skeletons}>{getSkeletons(view)}</div>;
        }
        return null;
    }, [isLoading, view]);

    const ItemContainer: FC<{
        height: number;
        width: number;
        index: number;
    }> = useCallback(
        ({ children, height, width, index }) => (
            <div className={cls.ItemContainer}>
                <ArticleListItemSkeleton
                    className={cls.card}
                    view={view}
                    key={index}
                />
            </div>
        ),
        [],
    );

    if (!virtualized) {
        return (
            <div className={classNames(cls.itemsWrapper, {}, [className])}>
                {articles?.map((article) => renderArticle(0, article))}
                {isLoading && getSkeletons(view)}
            </div>
        );
    }

    if (view === ArticleView.LIST) {
        return (
            <Virtuoso
                data={articles}
                itemContent={renderArticle}
                endReached={onLoadNextPart}
                className={classNames(cls.ArticleList, {}, [
                    className,
                    cls[view],
                ])}
                customScrollParent={customScrollParent}
                components={{
                    Footer,
                }}
            />
        );
    }

    return (
        <VirtuosoGrid
            data={articles}
            itemContent={renderArticle}
            endReached={onLoadNextPart}
            customScrollParent={customScrollParent}
            listClassName={cls.itemsWrapper}
            components={{
                ScrollSeekPlaceholder: ItemContainer,
            }}
            scrollSeekConfiguration={{
                enter: (velocity) => Math.abs(velocity) > 50,
                exit: (velocity) => Math.abs(velocity) < 10,
            }}
        />
    );
});

ArticleList.displayName = 'ArticleList';
