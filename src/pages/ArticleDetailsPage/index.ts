export { ArticleDetailsPageAsync as ArticleDetailsPage } from './ui/ArticleDetailsPage/ArticleDetailsPage.async';

export { ArticleDetailsCommentSchema } from './model/types/ArticleDetailsCommentSchema';

export { articleDetailsCommentsReducer, getArticleComments } from './model/slices/articleDetailsCommentsSlice';

export { fetchCommentsByArticleId } from './model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
