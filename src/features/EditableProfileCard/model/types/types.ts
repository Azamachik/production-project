import { Profile } from '@/entities/Profile';
import { ValidateProfileError } from '../consts/consts';

export interface ProfileSchema {
    readonly: boolean;
    isLoading?: boolean;
    data?: Profile;
    formData?: Profile;
    error?: string;
    validateErrors?: ValidateProfileError[];
}
