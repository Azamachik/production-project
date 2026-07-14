# Storybook

[Storybook](https://storybook.js.org/) используется для изолированной разработки и документирования UI-компонентов. Для каждого компонента описываются стори-кейсы — отдельные состояния компонента с разными пропсами, темами и данными. Эти же стори служат основой для скриншотного тестирования на Loki (см. [Тесты](/docs/tests.md)).

## Запуск

- `npm run storybook` - Запуск Storybook на порту 6006
- `npm run storybook:build` - Сборка статического билда (`storybook-static`)

## Конфигурация

Конфигурация лежит в [`config/storybook`](/config/storybook):

- [`main.ts`](/config/storybook/main.ts) — маска стори (`../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)`), список аддонов, фреймворк `@storybook/react-webpack5` (сборка через SWC);
- [`preview.ts`](/config/storybook/preview.ts) — глобальные декораторы и параметры;
- [`webpack.config.ts`](/config/storybook/webpack.config.ts) — адаптация webpack-конфига под фичи проекта (SCSS-модули, SVG, алиасы).

### Аддоны

- `@storybook/addon-essentials` — базовый набор (controls, actions, viewport, backgrounds…)
- `@storybook/addon-links`
- `@storybook/addon-interactions`
- `@storybook/addon-onboarding`
- `storybook-addon-themes`

## Расположение и именование

Файл со стори создаётся рядом с компонентом с расширением `.stories.tsx`:

```
ui/Button/
├── Button.tsx
├── Button.module.scss
└── Button.stories.tsx
```

## Декораторы

Декораторы оборачивают стори в нужный контекст. Часть подключена **глобально** в `preview.ts` и применяется ко всем стори:

- **`StyleDecorator`** — базовые обёртки/отступы;
- **`ThemeDecorator(Theme.LIGHT)`** — провайдер темы (по умолчанию светлая);
- **`RouterDecorator`** — `BrowserRouter` для компонентов со ссылками и навигацией.

Остальные декораторы из [`src/shared/config/storybook/decorators`](/src/shared/config/storybook/decorators) подключаются **точечно** в конкретной стори:

- **`ThemeDecorator(theme)`** — рендер стори в другой теме (например, тёмной);
- **`StoreDecorator(state, asyncReducers?)`** — оборачивает стори в `StoreProvider` с предустановленным Redux-стейтом. Основной способ «накормить» компонент данными без похода на сервер. По умолчанию уже подключает редьюсеры `loginForm`, `profile` и `articleDetails`.

> Отдельный аддон для мока сетевых запросов в проекте не подключён — данные компонентам предоставляются через предустановленный стейт (`StoreDecorator`).

## Пример (CSF3)

```typescript jsx
import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';

import { Button, ButtonSize, ButtonTheme } from './Button';

const meta = {
    title: 'shared/Button',
    component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
    args: {
        children: 'Button',
        variant: ButtonTheme.CLEAR,
    },
};

export const OutlineSizeL: Story = {
    args: {
        children: 'Button',
        variant: ButtonTheme.OUTLINE,
        size: ButtonSize.L,
    },
};

// Та же стори, но в тёмной теме
export const OutlineDark: Story = {
    args: {
        children: 'Button',
        variant: ButtonTheme.OUTLINE,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
```

## Пример со стором

Для компонентов, читающих данные из Redux, используйте `StoreDecorator` с предустановленным стейтом:

```typescript jsx
import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';

import { ArticleDetails } from './ArticleDetails';

const meta = {
    title: 'entities/Article/ArticleDetails',
    component: ArticleDetails,
} satisfies Meta<typeof ArticleDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    decorators: [
        StoreDecorator({
            articleDetails: {
                data: { /* ... данные статьи ... */ },
            },
        }),
    ],
};
```
