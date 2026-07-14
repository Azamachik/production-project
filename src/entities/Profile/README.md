# Profile

Доменная сущность «профиль пользователя». Хранит модель данных профиля и его презентационное отображение.

## Описание

`Profile` описывает публичные данные пользователя: имя, фамилию, возраст, город, страну, валюту, аватар и username. Сущность содержит только «глупую» карточку профиля (`ProfileCard`) без бизнес-логики — вся логика редактирования, валидации и сохранения реализована в фиче [EditableProfileCard](../../features/EditableProfileCard).

## Состав

- `ui/ProfileCard` — presentational-карточка профиля (режимы просмотра, загрузки, ошибки).
- `model/types/Profile` — тип `Profile`.

## Public API

```ts
export type { Profile } from './model/types/Profile';
export { ProfileCard } from './ui/ProfileCard';
```
