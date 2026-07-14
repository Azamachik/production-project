# EditableProfileCard

Фича редактируемой карточки профиля. Добавляет к сущности [Profile](../../entities/Profile) полный цикл просмотра и редактирования данных.

## Описание

Одна из самых крупных фич проекта. Оборачивает presentational-компонент `ProfileCard` бизнес-логикой: загрузка данных профиля (`fetchProfileData`), переключение режима readonly/редактирование, локальное изменение полей формы, клиентская валидация (`validateProfileData`) с выводом ошибок, сохранение (`updateProfileData`) и отмена изменений. Состояние хранится в `profileSlice` и подключается асинхронно. Панель управления (`EditableProfileCardControlPanel`) показывает кнопки «Редактировать / Сохранить / Отменить» с учётом того, что редактировать чужой профиль нельзя.

## Состав

- `ui/EditableProfileCard` — карточка с логикой редактирования.
- `ui/EditableProfileCardControlPanel` — панель кнопок управления.
- `model/services` — `fetchProfileData`, `updateProfileData`, `validateProfileData`.
- `model/slices/profileSlices`, `model/selectors`, `model/types`, `model/consts` — состояние, селекторы, `ProfileSchema`, коды ошибок валидации.

## Public API

```ts
export { EditableProfileCard } from './ui/EditableProfileCard/EditableProfileCard';
export { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
export { profileReducer, profileActions } from './model/slices/profileSlices';
export type { ProfileSchema } from './model/types/types';
```
