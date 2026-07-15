import { Roles } from '../consts/user';

export interface User {
    id: string;
    username: string;
    avatar?: string;
    roles?: Roles[];
}

export interface UserSchema {
    authData?: User;
    _mounted: boolean;
}
