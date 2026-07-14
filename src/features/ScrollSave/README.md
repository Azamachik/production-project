# ScrollSave

Фича сохранения позиции скролла. Запоминает прокрутку страниц, чтобы восстанавливать её при возврате.

## Описание

Чисто «модельная» фича без UI. Хранит в редакс-сторе (`scrollSlice`) позицию скролла по каждому пути (path → scrollTop). Селектор `getScrollByPath` отдаёт сохранённое значение для текущего маршрута. Используется виджетом [Page](../../widgets/Page): при монтировании восстанавливает прокрутку, а при скролле троттлингом сохраняет её — это особенно важно для списка статей с бесконечной подгрузкой.

## Состав

- `model/slices/scrollSlice` — состояние позиций скролла по путям.
- `model/selectors/getScroll` — `getScrollByPath`.
- `model/types/ScrollSaveSchema` — схема состояния.

## Public API

```ts
export { scrollReducer, scrollActions } from './model/slices/scrollSlice';
export { getScrollByPath } from './model/selectors/getScroll';
export type { ScrollSaveSchema } from './model/types/ScrollSaveSchema';
```
