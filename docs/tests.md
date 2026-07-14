# Тестирование

В проекте используется 3 вида тестов:

1. **Unit-тесты на Jest** — чистая логика (селекторы, редьюсеры, async thunks, хелперы) — `npm run test:unit`
2. **Компонентные тесты на React Testing Library** — рендер компонентов и проверка поведения — `npm run test:unit`
3. **Скриншотное (визуальное) тестирование на Loki** — сравнение UI со снятыми эталонами — `npm run test:ui`
4. e2e тестирование с Cypress `npm run test:e2e`.

---

## Расположение и именование

Тесты лежат рядом с тестируемым кодом. Jest подхватывает файлы по маске
`src/**/*(*.)@(spec|test).[tj]s?(x)`, то есть:

- `*.test.ts` / `*.spec.ts` — логика;
- `*.test.tsx` / `*.spec.tsx` — компоненты.

Пример:

```
model/selectors/getUserRoles/
├── getUserRoles.ts
└── getUserRoles.test.ts
```

---

## Конфигурация Jest

Конфиг находится в [`config/jest/jest.config.ts`](/config/jest/jest.config.ts). Ключевые моменты:

- `testEnvironment: 'jsdom'` — эмуляция DOM для компонентных тестов;
- алиасы `@/shared`, `@/entities`, `@/features`, `@/widgets`, `@/pages`, `@/app` смаплены на `src/*`;
- SCSS замокан через `identity-obj-proxy`, SVG — через [`jestEmptyComponent.tsx`](/config/jest/jestEmptyComponent.tsx);
- `setupFilesAfterEnv` подключает [`setupTests.ts`](/config/jest/setupTests.ts), где импортируется `@testing-library/jest-dom` (матчеры `toBeInTheDocument`, `toHaveTextContent` и т.д.);
- глобальные переменные `__IS_DEV__`, `__API__`, `__PROJECT__` доступны в тестах.

### Отчёт

Помимо стандартного вывода, используется `jest-html-reporters`: HTML-отчёт генерируется в `reports/unit/report.html` и открывается автоматически.

---

## Вспомогательные утилиты

Лежат в [`src/shared/lib/tests`](/src/shared/lib/tests).

### ComponentRender

Рендерит компонент со всеми провайдерами приложения: `MemoryRouter`, `StoreProvider` (Redux) и `I18nextProvider`. Используется для компонентов, зависящих от роутинга, стора или переводов.

```tsx
import { ComponentRender } from '@/shared/lib/tests/componentRender/ComponentRender';

ComponentRender(<EditableProfileCard id="1" />, {
    route: '/profile/1', // начальный маршрут
    initialState: {
        /* ... */
    }, // предустановленный стейт (DeepPartial<StateSchema>)
    asyncReducers: {
        /* ... */
    }, // асинхронно подключаемые редьюсеры
});
```

### renderWithTranslation

Облегчённая версия — оборачивает компонент только в `I18nextProvider`. Подходит для «глупых» компонентов без стора и роутинга.

```tsx
import { renderWithTranslation } from '@/shared/lib/tests/renderWithTranslation/renderWithTranslation';

renderWithTranslation(<Button>Text</Button>);
```

### TestAsyncThunk

Класс для тестирования async thunks. Мокает `axios`, `dispatch`, `getState` и `navigate`, что позволяет проверять цепочку `pending → fulfilled/rejected` и обращения к API.

```ts
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

const thunk = new TestAsyncThunk(loginByUsername);
thunk.api.post.mockReturnValue(Promise.resolve({ data: { id: '1' } }));

const result = await thunk.callThunk({ username: 'admin', password: '123' });

expect(thunk.dispatch).toHaveBeenCalledTimes(4);
expect(result.meta.requestStatus).toBe('fulfilled');
```

---

## Скриншотное тестирование (Loki)

[Loki](https://loki.js.org/) снимает скриншоты со стори из Storybook и сравнивает их с эталонными изображениями, отлавливая непреднамеренные визуальные изменения. Тестируется столько кейсов, сколько описано в `*.stories.tsx` (см. [Storybook](/docs/storybook.md)).

Конфигурация задана в `package.json` в ключе `loki` — два таргета (запускаются в Docker):

- `chrome.laptop` — 1366×768 (десктоп);
- `chrome.iphone7` — пресет iPhone 7 (мобильный).

### Команды

- `npm run test:ui` - Запуск скриншотных тестов (сравнение с эталонами)
- `npm run test:ui:ok` - Подтверждение (обновление) эталонных скриншотов
- `npm run test:ui:ci` - Запуск в CI против собранного `storybook-static`
- `npm run test:ui:report` - Полный отчёт (`json` + `html`)
- `npm run test:ui:json` - Генерация json-отчёта
- `npm run test:ui:html` - Генерация HTML-отчёта

### Рабочий процесс

1. Первый запуск снимает эталонные изображения (reference).
2. При последующих запусках Loki сравнивает текущий рендер с эталоном.
3. Если изменение UI преднамеренное — обновляем эталоны через `npm run test:ui:ok`.
4. В CI визуальные тесты прогоняются на заранее собранном билде Storybook (`npm run test:ui:ci`).

> Для локального запуска нужен установленный и запущенный Docker.
