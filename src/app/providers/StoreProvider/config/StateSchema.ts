import {
    AnyAction,
    Reducer,
    ReducersMapObject,
    EnhancedStore,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entities/Article';
import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { AddCommentFormSchema } from 'features/AddCommentForm';
import { LoginSchema } from 'features/AuthByUsername';
import { ProfileSchema } from 'features/EditableProfileCard';
import { To } from 'history';
import { ArticleDetailsCommentSchema } from 'pages/ArticleDetailsPage';
import { ArticlesSchema } from 'pages/ArticlesPage';
import { NavigateOptions } from 'react-router';
import { CombinedState } from 'redux';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    articleDetails?: ArticleDetailsSchema;
    articleDetailsComments?: ArticleDetailsCommentSchema;
    addCommentForm?: AddCommentFormSchema;
    articles?: ArticlesSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (
        state: StateSchema,
        action: AnyAction,
    ) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
    navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
