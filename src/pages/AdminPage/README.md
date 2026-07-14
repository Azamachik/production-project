# AdminPage

Административная страница.

- **Маршрут:** `/admin`
- **Доступ:** только для ролей `ADMIN` и `MANAGER`

## Описание

Страница с ограниченным по ролям доступом — демонстрирует работу роут-гарда `RequireRole`. При попытке зайти без нужной роли пользователь редиректится на [ForbiddenPage](../ForbiddenPage). Загружается асинхронно (`.async.tsx`).

## Состав

- `ui/AdminPage` — административная страница (+ `.async` обёртка).
- `model/slices/AdminPageSlice`, `model/types/AdminPageSchema` — состояние страницы.

## Public API

```ts
export { AdminPageAsync as AdminPage } from './ui/AdminPage/AdminPage.async';
export type { AdminPageSchema } from './model/types/AdminPageSchema';
```
