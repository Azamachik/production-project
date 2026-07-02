import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { SortOrder } from '@/shared/lib/types';
import {
    ArticleSortField,
    ArticleType,
} from '@/entities/Article/model/consts/consts';
import { getArticlesInited } from '../../selectors/getArticles';
import { fetchArticles } from '../fetchArticles/fetchArticles';
import { articlesActions } from '../../slices/articlesSlice';

export const initArticles = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>('articlesPage/initArticles', async (searchParams, thunkAPI) => {
    const { dispatch, getState } = thunkAPI;
    const inited = getArticlesInited(getState());

    if (!inited) {
        const orderFromUrl = searchParams.get('order') as SortOrder;
        const sortFromUrl = searchParams.get('sort') as ArticleSortField;
        const searchFromUrl = searchParams.get('search');
        const typeFromUrl = searchParams.get('type') as ArticleType;

        dispatch(articlesActions.setOrder(orderFromUrl));
        dispatch(articlesActions.setSort(sortFromUrl));
        dispatch(articlesActions.setSearch(searchFromUrl));
        dispatch(articlesActions.setType(typeFromUrl));
        dispatch(articlesActions.initState());
        dispatch(fetchArticles({}));
    }
});
