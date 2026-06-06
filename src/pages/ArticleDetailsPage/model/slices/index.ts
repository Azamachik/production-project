import { combineReducers } from '@reduxjs/toolkit';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';
import { articleDetailsRecommendationListReducer } from './articleDetailsRecommendationList';
import { ArticleDetailsPageSchema } from '../types';

export const articleDetailsPageReducer =
    combineReducers<ArticleDetailsPageSchema>({
        recommendations: articleDetailsRecommendationListReducer,
        comments: articleDetailsCommentsReducer,
    });
