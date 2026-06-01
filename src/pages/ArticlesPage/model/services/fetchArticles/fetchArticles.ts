import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getArticlesLimit } from '../../selectors/getArticles';

interface FetchArticlesArgs {
    page?: number;
}
export const fetchArticles = createAsyncThunk<Article[], FetchArticlesArgs, ThunkConfig<string>>(
    'articlesPage/fetchArticles',
    async (args, thunkAPI) => {
        const { page = 1 } = args;
        const { extra, rejectWithValue, getState } = thunkAPI;
        const limit = getArticlesLimit(getState());

        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _page: page,
                    _limit: limit,
                },
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (error) {
            return rejectWithValue('error');
        }
    },
);
