# LangSwitcher

Фича переключения языка интерфейса. Кнопка смены локали приложения.

## Описание

`LangSwitcher` меняет текущий язык через `i18next` (`i18n.changeLanguage`), переключая между русским и английским. Используется в [Sidebar](../../widgets/Sidebar). Тексты берутся из переводов в `public/locales`.

## Состав

- `ui/LangSwitcher` — кнопка переключения языка.

## Public API

```ts
export { LangSwitcher } from './ui/LangSwitcher';
```
