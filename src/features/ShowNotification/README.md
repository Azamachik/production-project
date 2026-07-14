# ShowNotification

Фича показа уведомлений. Кнопка-колокольчик, открывающая список уведомлений пользователя.

## Описание

Оборачивает `NotificationList` из сущности [Notification](../../entities/Notification) в адаптивный контейнер: на десктопе список открывается в `Popover`, на touch-устройствах — в `Drawer` (тип устройства определяется хуком `useDeviceDetect`). Отображается в навбаре.

## Состав

- `ui/ShowNotification` — триггер-кнопка и адаптивный контейнер списка уведомлений.

## Public API

```ts
export { ShowNotification } from './ui/ShowNotification';
```
