import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleDetailsPageRecommendationsIsLoading = (
    state: StateSchema,
) => state.articleDetailsPage?.recommendations?.isLoading ?? false;

export const getArticleDetailsPageRecommendationsIsLoadingError = (
    state: StateSchema,
) => state.articleDetailsPage?.recommendations?.error;
