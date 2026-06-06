import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleDetailsPageCommentsIsLoading = (state: StateSchema) =>
    state.articleDetailsPage?.comments?.isLoading ?? false;

export const getArticleDetailsPageCommentsError = (state: StateSchema) =>
    state.articleDetailsPage?.comments?.error;
