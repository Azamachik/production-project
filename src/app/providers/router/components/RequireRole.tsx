import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, Navigate } from 'react-router-dom';

import { getUserRoles } from '@/entities/User';
import { RoutePath } from '@/shared/consts/router';

import { Roles } from '../config/routeConfig';

export function RequireRole({
    children,
    roles,
}: {
    children: JSX.Element;
    roles?: Roles[];
}) {
    const location = useLocation();
    const userRoles = useSelector(getUserRoles);

    const hasAccess = useMemo(() => {
        if (!roles || roles.length === 0) return true;
        return roles.some((role) => userRoles?.includes(role));
    }, [roles, userRoles]);

    if (!hasAccess) {
        return (
            <Navigate
                to={RoutePath.forbidden}
                state={{ from: location }}
                replace
            />
        );
    }

    return children;
}
