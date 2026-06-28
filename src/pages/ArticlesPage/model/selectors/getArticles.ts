import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';
import {
    ArticleSortField,
    ArticleType,
} from 'entities/Article/model/consts/consts';

export const getArticlesIsLoading = (state: StateSchema) =>
    state.articles?.isLoading || false;
export const getArticlesError = (state: StateSchema) => state.articles?.error;
export const getArticlesView = (state: StateSchema) =>
    state.articles?.view || ArticleView.GRID;
export const getArticlesPageNumber = (state: StateSchema) =>
    state.articles?.page || 1;
export const getArticlesLimit = (state: StateSchema) =>
    state.articles?.limit || 10;
export const getArticlesHasMore = (state: StateSchema) =>
    state.articles?.hasMore;
export const getArticlesInited = (state: StateSchema) =>
    state.articles?._inited;
export const getArticlesSort = (state: StateSchema) =>
    state.articles?.sort ?? ArticleSortField.DATE;
export const getArticlesOrder = (state: StateSchema) =>
    state.articles?.order ?? 'asc';
export const getArticlesSearch = (state: StateSchema) =>
    state.articles?.search ?? '';
export const getArticlesType = (state: StateSchema) =>
    state.articles?.type ?? ArticleType.ALL;
