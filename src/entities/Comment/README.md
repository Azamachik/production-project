# Comment

Доменная сущность «комментарий». Описывает модель комментария и предоставляет компоненты для его отображения.

## Описание

Комментарий (`Comment`) содержит текст, автора (`User`) и связан со статьёй. Сущность отвечает только за представление комментариев; логика добавления вынесена в фичу [AddCommentForm](../../features/AddCommentForm), а сбор списка под конкретную статью — в виджет [ArticleComments](../../widgets/ArticleComments).

## Состав

- `ui/CommentList` — список комментариев со скелетонами загрузки.
- `ui/CommentItem` — отдельный комментарий (аватар, имя, текст).
- `ui/CommentForm` — presentational-форма ввода комментария.
- `model/types/comment` — тип `Comment`.

## Public API

```ts
export type { Comment } from './model/types/comment';
export { CommentList } from './ui/CommentList/CommentList';
export { CommentForm } from './ui/CommentForm/CommentForm';
```
