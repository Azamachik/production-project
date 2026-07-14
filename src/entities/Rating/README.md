# Rating

Переиспользуемая сущность «оценка». Предоставляет универсальную карточку выставления рейтинга со звёздами и опциональным отзывом.

## Описание

`RatingCard` — presentational-компонент: принимает текущее значение и колбэки, показывает звёзды и модалку/дровер с полем для текстового отзыва. Сущность не привязана к конкретному домену — источник данных и способ сохранения задаёт фича-обёртка (например, [ArticleRating](../../features/ArticleRating) или [ProfileRating]).

## Состав

- `ui/RatingCard` — карточка со звёздами и вводом отзыва (адаптивна: Popover на десктопе, Drawer на touch-устройствах).
- `model/types/Rating` — тип `Rating`.

## Public API

```ts
export { RatingCard } from './ui/RatingCard/RatingCard';
export type { Rating } from './model/types/Rating';
```
