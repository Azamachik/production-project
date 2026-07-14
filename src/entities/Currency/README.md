# Currency

Небольшая справочная сущность «валюта». Предоставляет перечисление валют и селектор для их выбора.

## Описание

По структуре аналогична сущности [Country](../Country): используется в профиле и формах, где нужно указать валюту. Список валют задан перечислением `Currency`, `CurrencySelect` — обёртка над общим `Select` с предзаполненными опциями.

## Состав

- `model/consts/consts` — enum `Currency`.
- `ui/CurrencySelect` — селектор выбора валюты (read-only режим поддерживается).

## Public API

```ts
export { Currency } from './model/consts/consts';
export { CurrencySelect } from './ui/CurrencySelect/CurrencySelect';
```
