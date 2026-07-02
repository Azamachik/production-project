import { Comment } from '@/entities/Comment';
import { rtkApi } from '@/shared/api/rtkApi';

export const articleComments = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleComments: build.query<Comment[], string>({
            query: (articleId) => ({
                url: `/comments`,
                params: {
                    articleId,
                    _expand: 'user',
                },
            }),
        }),
        // addArticleComments: build.mutation<Comment, string>({
        //     query: (text) => {
        //         // const article =
        //         // const user =
        //         return {
        //         url: `/comments`,
        //         params: {
        //             articleId: article.id,
        //             userId: user.id,
        //             text,
        //             _expand: 'user',
        //         };
        //     }},
        // }),
    }),
});

export const { useGetArticleCommentsQuery } = articleComments;
