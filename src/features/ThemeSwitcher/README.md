# ThemeSwitcher

Фича переключения темы оформления. Кнопка смены визуальной темы приложения.

## Описание

`ThemeSwitcher` циклически переключает тему (светлая / тёмная / оранжевая) через хук `useTheme` из провайдера темы. Выбранная тема сохраняется в `localStorage` и применяется к корневому элементу приложения. Используется в [Sidebar](../../widgets/Sidebar).

## Состав

- `ui/ThemeSwitcher` — кнопка переключения темы.

## Public API

```ts
export { ThemeSwitcher } from './ui/ThemeSwitcher';
```
