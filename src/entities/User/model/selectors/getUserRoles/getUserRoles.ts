import { createSelector } from '@reduxjs/toolkit';

import { Roles } from '@/app/providers/router/config/routeConfig';
import { StateSchema } from '@/app/providers/StoreProvider';

export const getUserRoles = (state: StateSchema) => state.user?.authData?.roles;

export const isUserAdmin = createSelector(
    getUserRoles,
    (roles) => roles?.includes(Roles.ADMIN) ?? false,
);

export const isUserManager = createSelector(
    getUserRoles,
    (roles) => roles?.includes(Roles.MANAGER) ?? false,
);
