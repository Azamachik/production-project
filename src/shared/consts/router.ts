export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',
    ARTICLE_CREATE = 'article_create',
    ARTICLE_EDIT = 'article_edit',
    NOT_FOUND = 'not_found',
    FORBIDDEN = 'forbidden',
    ADMIN = 'admin',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile/',
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLE_DETAILS]: '/articles/',
    [AppRoutes.ARTICLE_CREATE]: '/articles/create',
    [AppRoutes.ARTICLE_EDIT]: '/articles/:id/edit',
    [AppRoutes.ADMIN]: '/admin',
    [AppRoutes.FORBIDDEN]: '/forbidden',
    [AppRoutes.NOT_FOUND]: '*',
};
