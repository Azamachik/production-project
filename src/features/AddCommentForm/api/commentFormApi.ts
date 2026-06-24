import { Article } from 'entities/Article';
import { rtkApi } from 'shared/api/rtkApi';

export const commentForm = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        addCommentForm: build.mutation<Article[], number>({
            query: (limit) => ({
                url: '/articles',
                params: {
                    _limit: limit,
                },
            }),
        }),
    }),
});

// export const { useAddCommentFormQuery } = commentForm;
