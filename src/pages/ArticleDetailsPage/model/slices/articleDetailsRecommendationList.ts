import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';

import { Article } from '@/entities/Article';
import { fetchArticlesRecommendationList } from '../services/fetchArticlesRecommendationList/fetchArticlesRecommendationList';
import { ArticleDetailsRecommendationListSchema } from '../types/ArticleDetailsRecommendationListSchema';

const recommendationListAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticleRecommendationsList =
    recommendationListAdapter.getSelectors<StateSchema>(
        (state) =>
            state.articleDetailsPage?.recommendations ||
            recommendationListAdapter.getInitialState(),
    );

const articleDetailsRecommendationListSlice = createSlice({
    name: 'articleDetailsRecommendationListSlice',
    initialState:
        recommendationListAdapter.getInitialState<ArticleDetailsRecommendationListSchema>(
            {
                isLoading: false,
                error: undefined,
                ids: [],
                entities: {},
            },
        ),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesRecommendationList.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(
                fetchArticlesRecommendationList.fulfilled,
                (state, action: PayloadAction<Article[]>) => {
                    state.isLoading = false;
                    recommendationListAdapter.setAll(state, action.payload);
                },
            )
            .addCase(
                fetchArticlesRecommendationList.rejected,
                (state, action) => {
                    state.isLoading = false;
                    state.error = action.payload;
                },
            );
    },
});

export const { reducer: articleDetailsRecommendationListReducer } =
    articleDetailsRecommendationListSlice;
