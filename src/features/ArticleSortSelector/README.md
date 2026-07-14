# ArticleSortSelector

Фича выбора сортировки статей. Позволяет задать поле и порядок сортировки списка статей.

## Описание

Ранее входила в состав сущности [Article](../../entities/Article), выделена в отдельную фичу. Presentational-компонент, управляемый снаружи: принимает текущее поле сортировки (`ArticleSortField`) и порядок (`SortOrder`), а изменения отдаёт через колбэки `onSortChange` / `onOrderChange`. Построен на двух компонентах `Select` из shared-слоя: сортировка по дате создания / названию / просмотрам и порядок по возрастанию/убыванию. Используется в фильтрах страницы [ArticlesPage](../../pages/ArticlesPage).

## Состав

- `ui/ArticleSortSelector` — два селектора (поле сортировки + порядок).
- `model/consts/articleSort` — enum `ArticleSortField` (`VIEWS`, `TITLE`, `DATE`).

## Public API

```ts
export { ArticleSortSelector } from './ui/ArticleSortSelector';
export { ArticleSortField } from './model/consts/articleSort';
```
