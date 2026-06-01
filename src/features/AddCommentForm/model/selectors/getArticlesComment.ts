import { StateSchema } from 'app/providers/StoreProvider';

export const getArticlesCommentFormText = (state: StateSchema) =>
    state.addCommentForm?.text || '';

export const getArticlesCommentFormError = (state: StateSchema) =>
    state.addCommentForm?.error;
