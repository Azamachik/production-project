import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/tests/storybook_avatar.jpg';
import { ProfileCard } from './ProfileCard';

const meta = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        data: {
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
};

export const PrimaryDark: Story = {
    args: {
        data: {
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
    decorators: [ThemeDecorator(Theme.DARK)],
};
