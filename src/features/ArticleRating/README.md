# ArticleRating

Фича оценки статьи. Позволяет пользователю поставить статье рейтинг и оставить отзыв.

## Описание

Обёртка над сущностью [Rating](../../entities/Rating): получает текущую оценку пользователя и отправляет новую через RTK Query (`articleRatingApi`, эндпоинты `getArticleRating` / `rateArticle`). Пока рейтинг загружается, показывается скелетон. Фича связывает доменную оценку с конкретной статьёй и текущим пользователем.

## Состав

- `ui/ArticleRating` — компонент рейтинга статьи поверх `RatingCard`.
- `api/articleRatingApi` — RTK Query эндпоинты чтения и отправки оценки.

## Public API

```ts
export { ArticleRating } from './ui/ArticleRating';
```
