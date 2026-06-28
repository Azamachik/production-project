import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import { getUserMounted } from './model/selectors/getUserMounted/getUserMounted';
import { userReducer } from './model/slices/userSlice';

export type { UserSchema, User } from './model/types/User';

export { userReducer, getUserAuthData, getUserMounted };
