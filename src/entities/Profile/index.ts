export {
    Profile,
    ProfileSchema,
} from './model/types/Profile';

export {
    profileReducer,
    profileActions,
} from './model/slices/profileSlices';

export {
    ProfileCard,
} from './ui/ProfileCard';

export {
    fetchProfileData,
} from './model/services/fetchProfileData/fetchProfileData';
