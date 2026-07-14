# ArticleComments

Виджет блока комментариев к статье. Объединяет отображение и добавление комментариев в единый блок.

## Описание

Композиционный виджет: связывает форму добавления комментария (фича [AddCommentForm](../../features/AddCommentForm)) и список комментариев (сущность [Comment](../../entities/Comment)) для конкретной статьи. Данные комментариев и их отправка выполняются через RTK Query (`articleCommentsApi`). Размещается на странице детального просмотра статьи.

## Состав

- `ui/ArticleComments` — блок «форма + список комментариев» для статьи.
- `api/articleCommentsApi` — RTK Query эндпоинты получения и добавления комментариев.

## Public API

```ts
export { ArticleComments } from './ui/ArticleComments';
```
