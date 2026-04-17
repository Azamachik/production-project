import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
    const data = {
        username: 'admin',
        age: 22,
        country: Country.Russia,
        lastname: 'Ivanov',
        firstname: 'Ivan',
        city: 'Kazan',
        currency: Currency.USD,
        description: 'Описание',
        avatar: 'https://avatars.mds.yandex.net/i?id=173df4e04c7b771f188bb66f67851589-5652956-images-thumbs&n=13',
    };
    
    test('Should return data', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    
    test('Should return undefined working with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toBeUndefined();
    });
});
