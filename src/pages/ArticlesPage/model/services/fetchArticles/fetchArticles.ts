import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article } from '@/entities/Article';
import { addQueryParams } from '@/shared/lib/url/addQueryParams/addQueryParams';
import { ArticleType } from '@/entities/Article/model/consts/consts';
import {
    getArticlesLimit,
    getArticlesOrder,
    getArticlesPageNumber,
    getArticlesSearch,
    getArticlesSort,
    getArticlesType,
} from '../../selectors/getArticles';

interface FetchArticlesProps {
    replace?: boolean;
}
export const fetchArticles = createAsyncThunk<
    Article[],
    FetchArticlesProps,
    ThunkConfig<string>
>('articlesPage/fetchArticles', async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;
    const limit = getArticlesLimit(getState());
    const order = getArticlesOrder(getState());
    const sort = getArticlesSort(getState());
    const search = getArticlesSearch(getState());
    const page = getArticlesPageNumber(getState());
    const type = getArticlesType(getState());

    try {
        addQueryParams({
            sort,
            order,
            search,
            type,
        });

        const response = await extra.api.get<Article[]>('/articles', {
            params: {
                _expand: 'user',
                _page: page,
                _limit: limit,
                _order: order,
                _sort: sort,
                type_like: type === ArticleType.ALL ? undefined : type,
                q: search,
            },
        });

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (error) {
        return rejectWithValue('error');
    }
});
