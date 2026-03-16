import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { StateSchema } from 'app/providers/StoreProvider';
import { userActions } from 'entities/User/model/slices/userSlice';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername', () => {
    let dispatch: Dispatch;
    let getState: () => StateSchema;
    
    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
    });
    
    test('Log in with success', async () => {
        const userReturnData = { username: 'user', id: '1' };
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userReturnData }));
        const {
            dispatch,
            callThunk,
        } = TestAsyncThunk(loginByUsername);
        const result = await callThunk({ username: 'user', password: 'pass' });
        
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userReturnData));
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(result.payload).toEqual(userReturnData);
        expect(result.meta.requestStatus).toBe('fulfilled');
    });
    
    test('Log in with error', async () => {
        mockedAxios.post.mockReturnValue(Promise.reject(new Error('User not found')));
        const {
            dispatch,
            callThunk,
        } = TestAsyncThunk(loginByUsername);
        const result = await callThunk({ username: 'user', password: 'pass' });
        
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(result.payload).toBe('error');
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
