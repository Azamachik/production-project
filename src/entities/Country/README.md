# Country

Небольшая справочная сущность «страна». Предоставляет перечисление стран и селектор для их выбора в формах.

## Описание

Используется в профиле пользователя и других формах, где нужно выбрать страну. Список стран задан перечислением `Country`, а `CountrySelect` — обёртка над общим `Select` из shared-слоя с предзаполненными опциями.

## Состав

- `model/consts/consts` — enum `Country`.
- `ui/CountrySelect` — селектор выбора страны (read-only режим поддерживается).

## Public API

```ts
export { Country } from './model/consts/consts';
export { CountrySelect } from './ui/CountrySelect/CountrySelect';
```
