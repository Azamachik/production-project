# ArticleView

Фича переключения вида списка статей. Даёт пользователю выбор между отображением статей списком и плиткой.

## Описание

`ToggleArticleView` — набор кнопок-переключателей вида (`ArticleView.LIST` / `ArticleView.SMALL`). Компонент управляется снаружи: принимает текущий вид и колбэк `onViewClick`. Выбранный вид сохраняется на странице списка статей ([ArticlesPage](../../pages/ArticlesPage)) и влияет на разметку `ArticleList`.

## Состав

- `ui/ToggleArticleView` — переключатель вида отображения.

## Public API

```ts
export { ToggleArticleView } from './ui/ToggleArticleView/ToggleArticleView';
```
