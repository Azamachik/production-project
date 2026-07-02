import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { Roles } from '@/shared/config/routeConfig/routeConfig';

export const getUserRoles = (state: StateSchema) => state.user?.authData?.roles;

export const isUserAdmin = createSelector(
    getUserRoles,
    (roles) => roles?.includes(Roles.ADMIN) ?? false,
);

export const isUserManager = createSelector(
    getUserRoles,
    (roles) => roles?.includes(Roles.MANAGER) ?? false,
);
