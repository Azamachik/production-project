import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileError } from '../../types/EditableProfileCard';

const data = {
    username: 'Admin',
    age: 22,
    country: Country.Russia,
    lastname: 'Ch',
    firstname: 'Art',
    city: 'New-York',
    currency: Currency.USD,
};

describe('validateProfileData', () => {
    test('Success validation', () => {
        const result = validateProfileData(data);
        expect(result).toEqual([]);
    });
    
    test('Empty first name and last name', () => {
        const result = validateProfileData({
            ...data,
            firstname: '',
            lastname: '',
        });
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });
    
    test('Invalid age', () => {
        const result = validateProfileData({
            ...data,
            age: -1,
        });
        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });
    
    test('Invalid all possible fields', () => {
        const result = validateProfileData({});
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
        ]);
    });
});
