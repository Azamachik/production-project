import { Route, Routes } from 'react-router-dom';
import React, { Suspense, useMemo } from 'react';
import { rootConfig } from 'shared/config/rootConfig/rootConfig';
import { PageLoader } from 'widgets/PageLoader/PageLoader';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

const AppRouter = () => {
    const isAuth = useSelector(getUserAuthData);
    
    const routes = useMemo(
        () => Object
            .values(rootConfig)
            .filter((route) => !(route.authOnly && !isAuth)),
        [isAuth],
    );
    
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {routes.map(({ element, path }) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <div className="page-wrapper">
                                {element}
                            </div>
                        )}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
