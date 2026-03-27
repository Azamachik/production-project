import { Profile } from 'entities/Profile';

export enum ValidateProfileError {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_AGE = 'INCORRECT_AGE',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR',
}

export interface ProfileSchema {
    readonly: boolean;
    isLoading?: boolean;
    data?: Profile;
    formData?: Profile;
    error?: string;
    validateErrors?: ValidateProfileError[]
}
