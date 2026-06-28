export { ArticleDetailsPageAsync as ArticleDetailsPage } from './ui/ArticleDetailsPage/ArticleDetailsPage.async';

export type { ArticleDetailsPageSchema } from './model/types/index';

export type { ArticleDetailsRecommendationListSchema } from './model/types/ArticleDetailsRecommendationListSchema';

export type { ArticleDetailsCommentSchema } from './model/types/ArticleDetailsCommentSchema';

export {
    articleDetailsCommentsReducer,
    getArticleComments,
} from './model/slices/articleDetailsCommentsSlice';

export { fetchCommentsByArticleId } from './model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
