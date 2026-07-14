import { ArticleDetailsCommentSchema } from './ArticleDetailsCommentSchema';
import { ArticleDetailsRecommendationListSchema } from './ArticleDetailsRecommendationListSchema';

export interface ArticleDetailsPageSchema {
    recommendations: ArticleDetailsRecommendationListSchema;
    comments: ArticleDetailsCommentSchema;
}
