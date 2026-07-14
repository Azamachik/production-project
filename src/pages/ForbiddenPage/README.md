# ForbiddenPage

Страница «Доступ запрещён» (403).

- **Маршрут:** `/forbidden`
- **Доступ:** публичный

## Описание

Показывается, когда у пользователя недостаточно прав для доступа к разделу — например, при попытке зайти в [AdminPage](../AdminPage) без нужной роли роут-гард `RequireRole` перенаправляет сюда. Загружается асинхронно (`.async.tsx`).

## Состав

- `ui/ForbiddenPage` — экран с сообщением об отсутствии доступа.
- `model/slices/ForbiddenPageSlice`, `model/types/ForbiddenPageSchema` — состояние страницы.

## Public API

```ts
export { ForbiddenPageAsync as ForbiddenPage } from './ui/ForbiddenPage/ForbiddenPage.async';
export type { ForbiddenPageSchema } from './model/types/ForbiddenPageSchema';
```
