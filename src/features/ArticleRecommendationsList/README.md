# ArticleRecommendationsList

Фича «рекомендованные статьи». Показывает блок с подборкой статей, которые могут быть интересны пользователю.

## Описание

Загружает список рекомендаций через RTK Query (`articleRecommendationsApi`) и рендерит его переиспользуемым компонентом `ArticleList` из сущности [Article](../../entities/Article). Используется на странице детального просмотра статьи ([ArticleDetailsPage](../../pages/ArticleDetailsPage)).

## Состав

- `ui/ArticleRecommendationsList` — блок рекомендаций (со скелетонами загрузки).
- `api/articleRecommendationsApi` — RTK Query эндпоинт получения рекомендаций.

## Public API

```ts
export { ArticleRecommendationsList } from './ui/ArticleRecommendationsList/ArticleRecommendationsList';
```
