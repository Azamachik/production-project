import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import { getUserMounted } from './model/selectors/getUserMounted/getUserMounted';
import { getUserRoles } from './model/selectors/getUserRoles/getUserRoles';
import { userReducer, userActions } from './model/slices/userSlice';

export type { UserSchema, User } from './model/types/User';

export {
    userReducer,
    userActions,
    getUserAuthData,
    getUserMounted,
    getUserRoles,
};
