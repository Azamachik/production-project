import { HTMLAttributeAnchorTarget, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Badge } from 'shared/ui/Badge/Badge';
import { Button } from 'shared/ui/Button/Button';
import { Card } from 'shared/ui/Card/Card';
import { Text } from 'shared/ui/Text/Text';

import { AppLink } from 'shared/ui/AppLink/AppLink';
import {
    Article,
    ArticleBlockType,
    ArticleTextBlock,
    ArticleView,
} from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { className, article, view, target } = props;
    const navigate = useNavigate();
    const { t } = useTranslation();

    const types = article.type.map((type) => <Badge key={type} text={type} />);

    const onArticleOpen = useCallback(() => {
        navigate(RoutePath.article_details + article.id);
    }, [article.id, navigate]);

    if (view === ArticleView.LIST) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;
        return (
            <div
                className={classNames(cls.ArticleListItem, {}, [
                    className,
                    cls[view],
                ])}
            >
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar src={article.user.avatar} size={30} />
                        <Text
                            title={article.user.username}
                            className={cls.username}
                        />
                        <Text title={article.createdAt} />
                    </div>
                    <Text title={article.title} text={article.subtitle} />
                    <div className={cls.types}>{types}</div>
                    <img
                        src={article.image}
                        alt={article.title}
                        className={cls.image}
                    />
                    {textBlock && (
                        <ArticleTextBlockComponent
                            block={textBlock}
                            className={cls.textBlock}
                        />
                    )}
                    <div className={cls.footer}>
                        <AppLink
                            target={target}
                            to={RoutePath.article_details + article.id}
                        >
                            <Button onClick={onArticleOpen}>
                                {t('Читать далее ...')}
                            </Button>
                        </AppLink>
                        <span className={cls.viewsIcon}>
                            <EyeIcon />
                            {article.views}
                        </span>
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            target={target}
            to={RoutePath.article_details + article.id}
            className={classNames(cls.ArticleListItem, {}, [
                className,
                cls[view],
            ])}
        >
            <Card className={cls.card} onClick={onArticleOpen}>
                <div className={cls.imageWrapper}>
                    <img
                        src={article.image}
                        alt={article.title}
                        className={cls.image}
                    />
                    <Text text={article.createdAt} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    <div className={cls.types}>{types}</div>
                </div>
                <Text text={article.title} className={cls.title} />
            </Card>
        </AppLink>
    );
});

ArticleListItem.displayName = 'ArticleListItem';
