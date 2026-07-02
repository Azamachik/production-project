import { Roles } from '@/shared/config/routeConfig/routeConfig';

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
