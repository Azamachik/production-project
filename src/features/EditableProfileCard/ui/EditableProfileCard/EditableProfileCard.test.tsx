import { screen } from '@testing-library/react';
import { ComponentRender } from '@/shared/lib/tests/componentRender/ComponentRender';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { Profile } from '@/entities/Profile';
import { EditableProfileCard } from './EditableProfileCard';
import { profileReducer } from '../../model/slices/profileSlices';

const profileData: Profile = {
    id: '1',
    firstname: 'admin',
    lastname: 'admin',
    age: 32,
    currency: Currency.USD,
    city: 'Moscow',
    country: Country.Kazakhstan,
    username: 'admin123',
};

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profileData,
            form: profileData,
        },
        user: {
            authData: {
                id: '1',
                username: 'admin',
            },
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
};

describe('EditableProfileCard.test', () => {
    test('Renders with no users data', () => {
        ComponentRender(<EditableProfileCard id="1" />, options);
        expect(
            screen.getByTestId('EditableProfileCardControlPanel.Edit'),
        ).toBeInTheDocument();
    });
});
