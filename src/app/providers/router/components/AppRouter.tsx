import { Route, Routes } from 'react-router-dom';
import React, { Suspense, useCallback } from 'react';
import { AppRouteProps, routeConfig } from 'shared/config/rootConfig/rootConfig';
import { PageLoader } from 'widgets/PageLoader/PageLoader';
import { RequireAuth } from 'app/providers/router/components/RequireAuth';

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRouteProps) => {
        const elem = (
            <Suspense fallback={<PageLoader />}>
                <div className="page-wrapper">
                    {route.element}
                </div>
            </Suspense>
        );
        
        return (
            <Route
                key={route.path}
                path={route.path}
                element={(route.authOnly ? <RequireAuth>{elem}</RequireAuth> : elem)}
            />
        );
    }, []);
    
    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    );
};

export default AppRouter;
