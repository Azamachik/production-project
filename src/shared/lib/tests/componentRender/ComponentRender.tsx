import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';

import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import i18ForTests from '@/shared/config/i18n/i18ForTests';
import { ReducersList } from '@/shared/lib/hooks/useDynamicModuleLoad/useDynamicModuleLoad';

interface ComponentRenderProps {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: ReducersList;
}

export const ComponentRender = (
    component: ReactNode,
    options: ComponentRenderProps = {},
) => {
    const { route = '/', initialState, asyncReducers } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider
                asyncReducers={asyncReducers}
                initialState={initialState as StateSchema}
            >
                <I18nextProvider i18n={i18ForTests}>
                    {component}
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>,
    );
};
