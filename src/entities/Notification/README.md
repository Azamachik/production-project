# Notification

Доменная сущность «уведомление». Описывает модель уведомления, его отображение и запрос данных через RTK Query.

## Описание

Уведомление (`Notification`) содержит заголовок, описание и опциональную ссылку (href). Данные загружаются через отдельный RTK Query эндпоинт (`notificationsApi`), встроенный в общий `rtkApi`. Сущность отдаёт готовый список уведомлений; способ его показа (Popover на десктопе / Drawer на мобильных) реализован в фиче [ShowNotification](../../features/ShowNotification).

## Состав

- `ui/NotificationList` — список уведомлений со скелетонами загрузки.
- `ui/NotificationItem` — карточка одного уведомления (кликабельна при наличии href).
- `api/notificationsApi` — RTK Query эндпоинт получения уведомлений.
- `model/types/notification` — тип `Notification`.

## Public API

```ts
export { NotificationList } from './ui/NotificationList/NotificationList';
```
