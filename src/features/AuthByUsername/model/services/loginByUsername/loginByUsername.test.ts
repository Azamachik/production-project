import axios from 'axios';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { userActions } from 'entities/User/model/slices/userSlice';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername', () => {
    test('Log in with success', async () => {
        const userReturnData = { username: 'user', id: '1' };
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userReturnData }));
        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({ username: 'user', password: 'pass' });
        
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userReturnData));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(result.payload).toEqual(userReturnData);
        expect(result.meta.requestStatus).toBe('fulfilled');
    });
    
    test('Log in with error', async () => {
        mockedAxios.post.mockReturnValue(Promise.reject(new Error('User not found')));
        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({ username: 'user', password: 'pass' });
        
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.payload).toBe('error');
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
