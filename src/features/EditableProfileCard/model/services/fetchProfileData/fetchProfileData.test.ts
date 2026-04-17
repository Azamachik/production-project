import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { fetchProfileData } from './fetchProfileData';

const data = {
    username: 'Admin',
    age: 22,
    country: Country.Russia,
    lastname: 'Ch',
    firstname: 'Art',
    city: 'New-York',
    currency: Currency.USD,
};

describe('fetchProfileData', () => {
    test('Success fetch profile data from server', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        
        const result = await thunk.callThunk();
        
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });
    
    test('Server return error', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        
        thunk.api.get.mockReturnValue(Promise.reject(new Error('User Not Found')));
        
        const result = await thunk.callThunk();
        
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual('error');
    });
});
