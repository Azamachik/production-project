# AddCommentForm

Фича добавления комментария. Реализует форму ввода и отправку нового комментария.

## Описание

Отвечает за пользовательский сценарий «оставить комментарий»: хранит текст в собственном срезе (`addCommentFormSlice`), валидирует и передаёт наружу через колбэк `onSendComment`. UI подключается асинхронно (`.async.tsx`) через `DynamicModuleLoader`, чтобы редьюсер не попадал в основной бандл. Используется виджетом [ArticleComments](../../widgets/ArticleComments).

## Состав

- `ui/AddCommentForm` — форма ввода (+ `.async` обёртка для ленивой загрузки).
- `model/slices/addCommentFormSlice` — состояние текста комментария.
- `model/selectors`, `model/types` — селекторы и `AddCommentFormSchema`.
- `api/commentFormApi` — вспомогательный API фичи.

## Public API

```ts
export { AddCommentFormAsync as AddCommentForm } from './ui/AddCommentForm/AddCommentForm.async';
export { addCommentFormReducer } from './model/slices/addCommentFormSlice';
export type { AddCommentFormSchema } from './model/types/AddCommentFormSchema';
```
