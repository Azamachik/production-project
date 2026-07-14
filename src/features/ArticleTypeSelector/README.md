# ArticleTypeSelector

Фича выбора типа (категории) статей. Табы-фильтр по тематике статей.

## Описание

Ранее входила в состав сущности [Article](../../entities/Article), выделена в отдельную фичу. Presentational-компонент на основе `Tabs` из shared-слоя: принимает текущий тип (`ArticleType`) и колбэк `onChange`. Доступные категории: все статьи, айти, экономика, наука. Используется в фильтрах страницы [ArticlesPage](../../pages/ArticlesPage).

## Состав

- `ui/ArticleTypeSelector` — табы выбора типа статьи.
- `model/consts/articleType` — enum `ArticleType` (`ALL`, `IT`, `SCIENCE`, `ECONOMICS`).

## Public API

```ts
export { ArticleTypeSelector } from './ui/ArticleTypeSelector';
export { ArticleType } from './model/consts/articleType';
```
