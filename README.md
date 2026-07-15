# Статеечки.ру

Учебно-производственный проект блог-платформы на **React + TypeScript**, построенный по методологии **Feature-Sliced Design**. Приложение включает авторизацию с разграничением доступа по ролям, ленту статей с бесконечной подгрузкой, детальный просмотр статьи с комментариями, рейтингом и рекомендациями, редактируемый профиль пользователя и систему уведомлений.

Проект сфокусирован не только на функциональности, но и на «продакшн-обвязке»: две системы сборки (webpack и Vite), интернационализация, тёмная/светлая темы, unit-, компонентные и скриншотные тесты, Storybook, собственные архитектурные ESLint-правила, CI на GitHub Actions и pre-commit хуки.

## Стек технологий

- **UI:** React 18, React Router v6, SCSS-модули
- **State:** Redux Toolkit, RTK Query, асинхронное подключение редюсеров
- **Сборка:** Webpack, Vite, Babel, кастомные плагины
- **i18n:** i18next / react-i18next
- **Тесты:** Jest, React Testing Library, Loki (скриншоты), Storybook
- **Качество кода:** ESLint (+ собственные FSD-правила), Stylelint, Prettier, Husky

---

## Навигация

- [Запуск проекта](#запуск-проекта)
- [Скрипты](#скрипты)
- [Архитектура проекта](#архитектура-проекта)
    - [Слои и слайсы](#слои-и-слайсы)
- [Работа с данными](#работа-с-данными)
- [Работа с переводами](#работа-с-переводами)
- [Тесты](#тесты)
- [Линтинг](#линтинг)
- [Storybook](#storybook)
- [Конфигурация проекта](#конфигурация-проекта)
- [CI pipeline и pre-commit хуки](#ci-pipeline-и-pre-commit-хуки)

---

## Запуск проекта

```bash
npm install       # установка зависимостей
npm run start:dev # запуск фронтенда (Vite) + backend (json-server) в dev-режиме
```

Backend поднимается на моковом [json-server](https://github.com/typicode/json-server) (данные — в `json-server/db.json`).

---

## Скрипты

- `npm run start` - Сборка проекта на webpack (порт 3000)
- `npm run start:vite` - Запуск dev-сервера на Vite
- `npm run start:dev` - Параллельный запуск фронтенда (Vite) и backend (json-server)
- `npm run start:dev:server` - Запуск backend-сервера (json-server)
- `npm run build:prod` - Сборка в prod-режиме
- `npm run build:dev` - Сборка в dev-режиме (не минимизирована)
- `npm run lint:ts` - Проверка ts-файлов линтером
- `npm run lint:ts:fix` - Исправление ts-файлов линтером
- `npm run lint:css` - Проверка scss-файлов style-линтером
- `npm run lint:css:fix` - Исправление scss-файлов style-линтером
- `npm run test:unit` - Запуск unit-тестов с Jest
- `npm run test:ui` - Запуск скриншотных тестов с Loki
- `npm run test:ui:ok` - Подтверждение новых скриншотов
- `npm run test:ui:ci` - Запуск скриншотных тестов в CI
- `npm run test:ui:report` - Генерация полного отчёта для скриншотных тестов
- `npm run test:ui:json` - Генерация json-отчёта для скриншотных тестов
- `npm run test:ui:html` - Генерация HTML-отчёта для скриншотных тестов
- `npm run storybook` - Запуск Storybook
- `npm run storybook:build` - Сборка Storybook-билда
- `npm run prettier` - Форматирование кода в `./src`
- `npm run prepare` - Установка pre-commit хуков (Husky)
- `npm run generate:slice` - Скрипт для генерации FSD-слайсов

---

## Архитектура проекта

Проект написан в соответствии с методологией **Feature-Sliced Design**.

Ссылка на документацию — [feature-sliced design](https://feature-sliced.design/docs/get-started/tutorial)

Слои приложения (снизу вверх): `shared` → `entities` → `features` → `widgets` → `pages` → `app`. Импорты разрешены только в направлении «сверху вниз», а между модулями — только через public API (`index.ts`). Эти правила автоматически контролируются собственным ESLint-плагином (см. [Линтинг](#линтинг)).

У большинства слайсов в слоях `entities`, `features`, `widgets` и `pages` есть собственный `README.md` с описанием назначения, состава и public API.

### Слои и слайсы

#### Сущности (entities)

- [Article](/src/entities/Article) — ключевая сущность «статья»: модель, детальный просмотр, список
- [Comment](/src/entities/Comment) — комментарий: модель и компоненты отображения
- [Country](/src/entities/Country) — справочник стран и селектор выбора
- [Currency](/src/entities/Currency) — справочник валют и селектор выбора
- [Notification](/src/entities/Notification) — уведомление: модель, список, RTK Query API
- [Profile](/src/entities/Profile) — профиль пользователя: модель и карточка
- [Rating](/src/entities/Rating) — переиспользуемая карточка оценки со звёздами
- [User](/src/entities/User) — пользователь: данные авторизации и роли

#### Фичи (features)

- [AddCommentForm](/src/features/AddCommentForm) — форма добавления комментария
- [ArticleRating](/src/features/ArticleRating) — оценка статьи
- [ArticleRecommendationsList](/src/features/ArticleRecommendationsList) — блок рекомендованных статей
- [ArticleSortSelector](/src/features/ArticleSortSelector) — выбор поля и порядка сортировки статей
- [ArticleTypeSelector](/src/features/ArticleTypeSelector) — фильтр статей по типу (категории)
- [ArticleView](/src/features/ArticleView) — переключение вида списка (список/плитка)
- [AuthByUsername](/src/features/AuthByUsername) — авторизация по логину и паролю
- [AvatarDropdown](/src/features/AvatarDropdown) — меню пользователя по аватару
- [EditableProfileCard](/src/features/EditableProfileCard) — редактируемая карточка профиля
- [LangSwitcher](/src/features/LangSwitcher) — переключение языка
- [ScrollSave](/src/features/ScrollSave) — сохранение позиции скролла
- [ShowNotification](/src/features/ShowNotification) — показ списка уведомлений
- [ThemeSwitcher](/src/features/ThemeSwitcher) — переключение темы

#### Виджеты (widgets)

- [ArticleComments](/src/widgets/ArticleComments) — блок комментариев к статье
- [Navbar](/src/widgets/Navbar) — верхняя навигационная панель
- [Page](/src/widgets/Page) — обёртка страницы с бесконечным скроллом и сохранением прокрутки
- [PageError](/src/widgets/PageError) — экран ошибки (fallback для ErrorBoundary)
- [PageLoader](/src/widgets/PageLoader) — полноэкранный индикатор загрузки
- [Sidebar](/src/widgets/Sidebar) — боковое меню навигации

#### Страницы (pages)

- [MainPage](/src/pages/MainPage) — `/` — главная страница
- [AboutPage](/src/pages/AboutPage) — `/about` — о сайте
- [ProfilePage](/src/pages/ProfilePage) — `/profile/:id` — профиль пользователя
- [ArticlesPage](/src/pages/ArticlesPage) — `/articles` — список статей
- [ArticleDetailsPage](/src/pages/ArticleDetailsPage) — `/articles/:id` — детальный просмотр статьи
- [ArticleEditPage](/src/pages/ArticleEditPage) — `/articles/create`, `/articles/:id/edit` — создание/редактирование
- [AdminPage](/src/pages/AdminPage) — `/admin` — админ-панель (по ролям)
- [ForbiddenPage](/src/pages/ForbiddenPage) — `/forbidden` — доступ запрещён
- [NotFoundPage](/src/pages/NotFoundPage) — `*` — страница не найдена

---

## Работа с данными

Взаимодействие с данными осуществляется с помощью **Redux Toolkit**.
По возможности переиспользуемые сущности нормализуются с помощью `EntityAdapter`.

Запросы на сервер отправляются с помощью [RTK Query](/src/shared/api/rtkApi.ts).

Для асинхронного подключения редюсеров (чтобы не тянуть их в общий бандл) используется хук
[useDynamicModuleLoad](/src/shared/lib/hooks/useDynamicModuleLoad/useDynamicModuleLoad.tsx).

---

## Работа с переводами

В проекте используется библиотека **i18next** для работы с переводами.
Файлы с переводами хранятся в `public/locales`.

Для комфортной работы рекомендуем установить плагин для WebStorm/VSCode.

Документация i18next — [https://react.i18next.com/](https://react.i18next.com/)

---

## Тесты

В проекте используются 3 вида тестов:

1. Обычные unit-тесты на Jest — `npm run test:unit`
2. Тесты на компоненты с React Testing Library — `npm run test:unit`
3. Скриншотное тестирование с Loki — `npm run test:ui`

Подробнее о тестах — [документация тестирование](/docs/tests.md)

---

## Линтинг

В проекте используется **ESLint** для проверки TypeScript-кода и **Stylelint** для проверки файлов со стилями.

Также для строгого контроля главных архитектурных принципов FSD используется
ESLint-плагин [`eslint-plugin-feature-sliced-path-checker-stable`](https://www.npmjs.com/package/eslint-plugin-feature-sliced-path-checker-stable?activeTab=readme), который содержит 3 правила:

1. `path-checker` — запрещает использовать абсолютные импорты в рамках одного модуля
2. `layer-imports` — проверяет корректность использования слоёв с точки зрения FSD
   (например, `widgets` нельзя использовать в `features` и `entities`)
3. `public-api-imports` — разрешает импорт из других модулей только через public API. Имеет auto-fix

##### Запуск линтеров

- `npm run lint:ts` - Проверка ts-файлов линтером
- `npm run lint:ts:fix` - Исправление ts-файлов линтером
- `npm run lint:css` - Проверка scss-файлов style-линтером
- `npm run lint:css:fix` - Исправление scss-файлов style-линтером

---

## Storybook

В проекте для каждого компонента описываются стори-кейсы.
Запросы на сервер мокаются с помощью `storybook-addon-mock`.

Файл со сторикейсами создаётся рядом с компонентом с расширением `.stories.tsx`.

Запустить Storybook можно командой:

- `npm run storybook`

Подробнее о [Storybook](/docs/storybook.md)

Пример:

```typescript jsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};
```

---

## Конфигурация проекта

Для разработки проект содержит 2 конфига:

1. Webpack — `./config/build`
2. Vite — `vite.config.ts`

Оба сборщика адаптированы под основные фичи приложения.

Вся конфигурация хранится в `/config`:

- `/config/babel` — Babel (в т.ч. кастомные плагины)
- `/config/build` — конфигурация webpack
- `/config/jest` — конфигурация тестовой среды
- `/config/storybook` — конфигурация Storybook

В папке `scripts` находятся различные скрипты для рефакторинга / упрощения написания кода / генерации отчётов и т.д.

---

## CI pipeline и pre-commit хуки

Конфигурация GitHub Actions находится в `/.github/workflows`.
В CI прогоняются все виды тестов, сборка проекта и Storybook, линтинг.

В pre-commit хуках проект проверяется линтерами, конфиг — в `/.husky`.
