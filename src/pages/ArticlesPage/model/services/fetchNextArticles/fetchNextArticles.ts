import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';

import {
    getArticlesHasMore,
    getArticlesIsLoading,
    getArticlesPageNumber,
} from '../../selectors/getArticles';
import { articlesActions } from '../../slices/articlesSlice';
import { fetchArticles } from '../fetchArticles/fetchArticles';

export const fetchNextArticles = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>('articlesPage/fetchNextArticles', async (_, thunkAPI) => {
    const { dispatch, getState } = thunkAPI;
    const page = getArticlesPageNumber(getState());
    const hasMore = getArticlesHasMore(getState());
    const isLoading = getArticlesIsLoading(getState());

    if (hasMore && !isLoading) {
        dispatch(articlesActions.setPage(page + 1));
        dispatch(fetchArticles({}));
    }
});
