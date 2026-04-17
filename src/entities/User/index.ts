import { UserSchema, User } from './model/types/User';
import { userReducer } from './model/slices/userSlice';
import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import { getUserMounted } from './model/selectors/getUserMounted/getUserMounted';

export {
    UserSchema,
    User,
    userReducer,
    getUserAuthData,
    getUserMounted,
};
