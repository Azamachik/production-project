import { Profile } from 'entities/Profile';
import { ValidateProfileError } from '../../types/EditableProfileCard';

export const validateProfileData = (profileData?: Profile): ValidateProfileError[] => {
    if (!profileData) {
        return [ValidateProfileError.NO_DATA];
    }
    
    const { firstname, lastname, age } = profileData;
    const errors: ValidateProfileError[] = [];
    
    if (!firstname || !lastname) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }
    
    if (!age || !Number.isInteger(age) || age < 1) {
        errors.push(ValidateProfileError.INCORRECT_AGE);
    }

    return errors;
};
