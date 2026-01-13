import { Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import { rootConfig } from 'shared/config/rootConfig/rootConfig';
import { PageLoader } from 'widgets/PageLoader/PageLoader';

const AppRouter = () => (
    <Suspense fallback={<PageLoader />}>
        <Routes>
            {Object.values(rootConfig).map(({ element, path }) => (
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

export default AppRouter;
