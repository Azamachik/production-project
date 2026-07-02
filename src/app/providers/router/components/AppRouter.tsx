import { Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
    AppRouteProps,
    routeConfig,
} from '@/shared/config/routeConfig/routeConfig';
import { PageLoader } from '@/widgets/PageLoader';
import { RequireAuth } from './RequireAuth';
import { RequireRole } from './RequireRole';

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRouteProps) => {
        const elem = (
            <Suspense fallback={<PageLoader />}>{route.element}</Suspense>
        );

        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route.authOnly ? (
                        <RequireAuth>
                            <RequireRole roles={route.roles}>
                                {elem}
                            </RequireRole>
                        </RequireAuth>
                    ) : (
                        elem
                    )
                }
            />
        );
    }, []);

    return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};

export default AppRouter;
