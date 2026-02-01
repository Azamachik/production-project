import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18ForTests from 'shared/config/i18n/i18ForTests';
import { MemoryRouter } from 'react-router-dom';

interface ComponentRenderProps {
    route?: string;
}

export const ComponentRender = (component: ReactNode, options: ComponentRenderProps = {}) => {
    const {
        route = '/',
    } = options;
    
    return render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18ForTests}>
                {component}
            </I18nextProvider>
        </MemoryRouter>,
    );
};
