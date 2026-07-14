# ArticlesPage

Страница списка статей.

- **Маршрут:** `/articles`
- **Доступ:** только для авторизованных

## Описание

Одна из ключевых страниц приложения. Показывает список статей с бесконечной подгрузкой (через виджет [Page](../../widgets/Page)), фильтрами и сортировкой (`ArticlesPageFilters`): по типу, порядку, полю сортировки и поисковой строке. Состояние списка нормализовано через `EntityAdapter` в `articlesSlice`; фильтры синхронизируются с query-параметрами URL. Переключение вида списка/плитки обеспечивает фича [ArticleView](../../features/ArticleView).

## Состав

- `ui/ArticlesPage` — страница со списком статей (+ `.async` обёртка).
- `ui/ArticlesPageFilters` — панель фильтров, сортировки и поиска.
- `model/services` — `initArticles`, `fetchArticles`, `fetchNextArticles` (пагинация).
- `model/slices/articlesSlice`, `model/selectors`, `model/types` — состояние (EntityAdapter), селекторы, `ArticlesSchema`.

## Public API

```ts
export { ArticlesPageAsync as ArticlesPage } from './ui/ArticlesPage/ArticlesPage.async';
export type { ArticlesSchema } from './model/types/ArticlesSchema';
```
