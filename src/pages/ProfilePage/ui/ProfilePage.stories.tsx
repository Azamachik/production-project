import { Theme } from '@/app/providers/ThemeProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/tests/storybook_avatar.jpg';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';

import type { Meta, StoryObj } from '@storybook/react';
import ProfilePage from './ProfilePage';

const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    decorators: [
        StoreDecorator({
            profile: {
                formData: {
                    username: 'admin',
                    age: 22,
                    country: Country.Russia,
                    lastname: 'Ivanov',
                    firstname: 'Ivan',
                    city: 'Kazan',
                    currency: Currency.USD,
                    avatar,
                },
            },
        }),
    ],
};

export const PrimaryDark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            profile: {
                formData: {
                    username: 'admin',
                    age: 22,
                    country: Country.Russia,
                    lastname: 'Ivanov',
                    firstname: 'Ivan',
                    city: 'Kazan',
                    currency: Currency.USD,
                    avatar,
                },
            },
        }),
    ],
};
