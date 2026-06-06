import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';

export const fetchArticlesRecommendationList = createAsyncThunk<
    Article[],
    string | undefined,
    ThunkConfig<string>
>('articleDetailsPage/fetchArticlesRecommendationList', async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
        const response = await extra.api.get<Article[]>('/articles', {
            params: {
                _expand: 'user',
                _limit: 7,
            },
        });

        return response.data;
    } catch (error) {
        return rejectWithValue('error');
    }
});
