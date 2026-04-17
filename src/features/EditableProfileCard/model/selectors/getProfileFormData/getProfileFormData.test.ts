import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileFormData } from 'features/EditableProfileCard/model/selectors/getProfileFormData/getProfileFormData';

describe('getProfileFormData', () => {
    const formData = {
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
    
    test('Should return formData', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { formData },
        };
        
        expect(getProfileFormData(state as StateSchema)).toEqual(formData);
    });
    
    test('Should return undefined working with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileFormData(state as StateSchema)).toBeUndefined();
    });
});
