import { rtkApi } from 'shared/api/rtkApi';
import { Notification } from '../model/types/notification';

export const notificationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getNotifications: build.query<Notification[], null>({
            query: () => ({
                url: `/notifications`,
            }),
        }),
    }),
});

export const { useGetNotificationsQuery } = notificationsApi;
