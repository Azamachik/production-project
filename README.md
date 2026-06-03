# Блог

Blog-project React-приложение, построенное по архитектуре Feature-Sliced Design.

**Деплой:** https://zingy-biscotti-babf7f.netlify.app

## Стек

- **React + TypeScript**
- **Redux Toolkit** — глобальное состояние
- **React Router v6** — маршрутизация
- **i18next** — интернационализация (RU/EN)
- **SCSS Modules** — стили
- **Webpack** — кастомная конфигурация сборки

## Функциональность

- Аутентификация (логин/логаут)
- Лента статей с переключением вида (список/сетка)
- Детальная страница статьи с комментариями
- Редактирование профиля пользователя
- Переключение темы (светлая/тёмная)
- Смена языка интерфейса

## Запуск

```bash
npm run start:dev    # дев-сервер + json-server mock backend
npm run build:prod   # продакшн-сборка
npm run build:dev    # дев-сборка
```

## Тесты и линтинг

```bash
npm run test:unit    # unit-тесты (Jest)
npm run test:ui      # визуальные тесты (Loki)
npm run storybook    # Storybook на порту 6006
npm run lint:ts      # ESLint
npm run lint:css     # Stylelint
```
