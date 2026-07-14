# ArticleDetailsPage

Страница детального просмотра статьи.

- **Маршрут:** `/articles/:id`
- **Доступ:** только для авторизованных

## Описание

Собирает полноценную страницу статьи из нескольких слайсов: сам контент статьи (`ArticleDetails` из сущности [Article](../../entities/Article)), шапку с кнопкой редактирования (`ArticleDetailsPageHeader`, доступна автору), оценку статьи (фича [ArticleRating](../../features/ArticleRating)), список рекомендаций (фича [ArticleRecommendationsList](../../features/ArticleRecommendationsList)) и блок комментариев (виджет [ArticleComments](../../widgets/ArticleComments)). Управляет собственным состоянием комментариев и рекомендаций и загружает их сервисами при монтировании.

## Состав

- `ui/ArticleDetailsPage` — композиция страницы (+ `.async` обёртка).
- `ui/ArticleDetailsPageHeader` — шапка с навигацией назад и кнопкой редактирования.
- `model/services` — `fetchCommentsByArticleId`, `addArticlesComment`, `fetchArticlesRecommendationList`.
- `model/slices`, `model/selectors`, `model/types` — состояние комментариев и рекомендаций (EntityAdapter), селекторы, схемы.

## Public API

```ts
export { ArticleDetailsPageAsync as ArticleDetailsPage } from './ui/ArticleDetailsPage/ArticleDetailsPage.async';
export { articleDetailsCommentsReducer, getArticleComments } from './model/slices/articleDetailsCommentsSlice';
export { fetchCommentsByArticleId } from './model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
export type { ArticleDetailsPageSchema, ArticleDetailsRecommendationListSchema, ArticleDetailsCommentSchema };
```
