import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticleDetailsData } from 'entities/Article';
import { Comment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';

export const addArticlesComment = createAsyncThunk<
    Comment,
    string,
    ThunkConfig<string>
>('articleDetails/addArticlesComment', async (text, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;

    const user = getUserAuthData(getState());
    const article = getArticleDetailsData(getState());

    if (!user || !article) {
        return rejectWithValue('no auth');
    }

    try {
        const response = await extra.api.post<Comment>('/comments', {
            articleId: article.id,
            userId: user.id,
            text,
        });

        return response.data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
