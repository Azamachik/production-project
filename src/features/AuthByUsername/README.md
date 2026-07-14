# AuthByUsername

Фича авторизации по логину и паролю. Отвечает за вход пользователя в систему.

## Описание

Реализует полный сценарий логина: форма ввода (`LoginForm`) внутри модального окна (`LoginModal`), асинхронный thunk `loginByUsername`, который делает запрос, сохраняет пользователя в сущности [User](../../entities/User) и в `localStorage`. Состояние формы (логин, пароль, загрузка, ошибка) хранится в `loginSlice` и подключается асинхронно через `DynamicModuleLoader`. Форма грузится лениво (`.async.tsx`).

## Состав

- `ui/LoginModal`, `ui/LoginForm` — модалка и форма входа (+ `.async` обёртка).
- `model/services/loginByUsername` — thunk авторизации.
- `model/slices/loginSlice`, `model/selectors`, `model/types` — состояние формы, селекторы, `LoginSchema`.

## Public API

```ts
export { LoginModal } from './ui/LoginModal/LoginModal';
export type { LoginSchema } from './model/types/LoginSchema';
```
