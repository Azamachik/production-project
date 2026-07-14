import { combineReducers } from '@reduxjs/toolkit';

import { ArticleDetailsPageSchema } from '../types';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';
import { articleDetailsRecommendationListReducer } from './articleDetailsRecommendationList';

export const articleDetailsPageReducer =
    combineReducers<ArticleDetailsPageSchema>({
        recommendations: articleDetailsRecommendationListReducer,
        comments: articleDetailsCommentsReducer,
    });
