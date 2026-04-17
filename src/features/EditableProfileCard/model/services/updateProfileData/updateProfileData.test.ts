import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { updateProfileData } from './updateProfileData';
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

describe('updateProfileData', () => {
    test('Success update profile data', async () => {
        const thunk = new TestAsyncThunk(
            updateProfileData,
            {
                profile: {
                    formData: data,
                },
            },
        );
        
        thunk.api.put.mockReturnValue(Promise.resolve({ data }));
        
        const result = await thunk.callThunk();
        
        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });
    
    test('Server return error', async () => {
        const thunk = new TestAsyncThunk(
            updateProfileData,
            {
                profile: {
                    formData: data,
                },
            },
        );
        
        thunk.api.put.mockReturnValue(Promise.reject(new Error('Failed to update profile')));
        
        const result = await thunk.callThunk();
        
        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
    });
    
    test('Validation error', async () => {
        const thunk = new TestAsyncThunk(
            updateProfileData,
            {
                profile: {
                    formData: {
                        ...data,
                        age: -1,
                    },
                },
            },
        );
        
        const result = await thunk.callThunk();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });
});
