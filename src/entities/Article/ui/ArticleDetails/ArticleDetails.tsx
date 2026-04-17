import { classNames } from 'shared/lib/classNames/classNames';
import { ReducersList, useDynamicModuleLoad } from 'shared/lib/hooks/useDynamicModuleLoad/useDynamicModuleLoad';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { ArticleBlock, ArticleBlockType } from 'entities/Article/model/types/article';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import EyeIcon from 'shared/assets/icons/eye.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { useTranslation } from 'react-i18next';
import { articleDetailsReducer } from '../../model/slices/articleDetailsSlice';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import cls from './ArticleDetails.module.scss';
import { getArticleDetailsData } from '../../model/selectors/getArticleDetailsData/getArticleDetailsData';
import { getArticleDetailsError } from '../../model/selectors/getArticleDetailsError/getArticleDetailsError';
import {
    getArticleDetailsIsLoading,
} from '../../model/selectors/getArticleDetailsIsLoading/getArticleDetailsIsLoading';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleQuoteBlockComponent } from '../ArticleQuoteBlockComponent/ArticleQuoteBlockComponent';

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const initialReducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = (props: ArticleDetailsProps) => {
    const { t } = useTranslation('article-details');
    const { className, id } = props;
    const dispatch = useAppDispatch();
    const article = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);
    const isLoading = useSelector(getArticleDetailsIsLoading);
    
    let content;
    
    useDynamicModuleLoad(initialReducers, true);
    
    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);
    
    const renderBlock = (block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return (
                <ArticleCodeBlockComponent 
                    className={cls.block}
                    key={block.id} 
                    block={block} 
                />
            );
        case ArticleBlockType.IMAGE:
            return (
                <ArticleImageBlockComponent 
                    className={cls.block}
                    key={block.id} 
                    block={block} 
                />
            );
        case ArticleBlockType.TEXT:
            return (
                <ArticleTextBlockComponent 
                    className={cls.block}
                    key={block.id} 
                    block={block} 
                />
            );
        case ArticleBlockType.QUOTE:
            return (
                <ArticleQuoteBlockComponent 
                    className={cls.block}
                    key={block.id} 
                    block={block} 
                />
            );
        default:
            return null;
        }
    };
    
    if (isLoading) {
        content = (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} borderRadius="50%" />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width={100} height={16} />
                <Skeleton className={cls.skeleton} width={120} height={16} />
                <Skeleton className={cls.skeleton} width="100%" height={300} />

            </>
        );
    } else if (error) {
        content = (
            <Text
                align={TextAlign.CENTER}
                title={t('Произошла ошибка при загрузке статьи')}
            />
        );
    } else {
        content = (
            <>
                <div className={cls.avatarWrapper}>
                    <Avatar 
                        src={article?.image}
                        size={200}
                    />
                </div>
                <Text 
                    className={cls.title}
                    title={article?.title}
                    text={article?.subtitle}
                    size={TextSize.L}
                />
                <div className={cls.infoWrapper}>
                    <EyeIcon />
                    <Text text={String(article?.views)} />
                </div>
                <div className={cls.infoWrapper}>
                    <CalendarIcon />
                    <Text text={article?.createdAt} />
                </div>
                
                {article?.blocks.map(renderBlock)}
            </>
        );
    }
    
    return (
        <div className={classNames(cls.ArticleDetails, {}, [className])}>
            {content}
        </div>
    );
};
