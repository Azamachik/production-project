# User

Базовая сущность «пользователь». Хранит данные авторизованного пользователя и его роли в глобальном сторе.

## Описание

Одна из фундаментальных сущностей — на неё опираются авторизация, разграничение доступа по ролям и профиль. `userSlice` хранит текущего пользователя (`authData`), инициализирует его из `localStorage` при старте приложения и предоставляет экшены логина/логаута. Селекторы отдают данные пользователя, его роли и флаг завершённой инициализации (`_mounted`), который используется роутером, чтобы не редиректить до восстановления сессии.

## Состав

- `model/slices/userSlice` — редьюсер и экшены (`setAuthData`, `logout`, `initAuthData`).
- `model/selectors` — `getUserAuthData`, `getUserRoles`, `getUserMounted`.
- `model/types/User` — типы `User` и `UserSchema`, перечисление ролей.

## Public API

```ts
export type { UserSchema, User } from './model/types/User';
export { userReducer, userActions, getUserAuthData, getUserMounted };
```
