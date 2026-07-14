# ProfilePage

Страница профиля пользователя.

- **Маршрут:** `/profile/:id`
- **Доступ:** только для авторизованных

## Описание

Отображает и позволяет редактировать профиль пользователя по `id` из URL. Основное наполнение — фича [EditableProfileCard](../../features/EditableProfileCard), которая берёт на себя загрузку, валидацию и сохранение данных. Загружается асинхронно (`.async.tsx`).

## Public API

```ts
export { ProfilePageAsync as ProfilePage } from './ui/ProfilePage.async';
```
