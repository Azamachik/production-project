import { DeepPartial } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18ForTests from 'shared/config/i18n/i18ForTests';

interface ComponentRenderProps {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
}

export const ComponentRender = (
    component: ReactNode,
    options: ComponentRenderProps = {},
) => {
    const { route = '/', initialState } = options;

    return render(
        <StoreProvider initialState={initialState as StateSchema}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18ForTests}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>,
    );
};
