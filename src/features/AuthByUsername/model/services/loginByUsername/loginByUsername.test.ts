import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { userActions } from 'entities/User/model/slices/userSlice';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

describe('loginByUsername', () => {
    test('Log in with success', async () => {
        const thunk = new TestAsyncThunk(loginByUsername);
        const userReturnData = { username: 'user', id: '1' };
        thunk.api.post.mockReturnValue(Promise.resolve({ data: userReturnData }));
        const result = await thunk.callThunk({ username: 'user', password: 'pass' });
        
        expect(thunk.api.post).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userReturnData));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(result.payload).toEqual(userReturnData);
        expect(result.meta.requestStatus).toBe('fulfilled');
    });
    
    test('Log in with error', async () => {
        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.reject(new Error('User not found')));
        const result = await thunk.callThunk({ username: 'user', password: 'pass' });

        expect(thunk.api.post).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.payload).toBe('error');
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
