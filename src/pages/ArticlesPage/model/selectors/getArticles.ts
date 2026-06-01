import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';

export const getArticlesIsLoading = (state: StateSchema) => state.articles?.isLoading || false;
export const getArticlesError = (state: StateSchema) => state.articles?.error;
export const getArticlesView = (state: StateSchema) => state.articles?.view || ArticleView.GRID;
export const getArticlesPageNumber = (state: StateSchema) => state.articles?.page || 1;
export const getArticlesLimit = (state: StateSchema) => state.articles?.limit || 10;
export const getArticlesHasMore = (state: StateSchema) => state.articles?.hasMore;
