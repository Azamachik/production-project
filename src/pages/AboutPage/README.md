# AboutPage

Страница «О сайте».

- **Маршрут:** `/about`
- **Доступ:** публичный

## Описание

Простая информационная страница о проекте. Загружается асинхронно (`.async.tsx`) через ленивую подгрузку в роутере.

## Public API

```ts
export { AboutPageAsync as AboutPage } from './ui/AboutPage.async';
```
