import { classNames } from 'shared/lib/classNames/classNames';
import { ReducersList, useDynamicModuleLoad } from 'shared/lib/hooks/useDynamicModuleLoad/useDynamicModuleLoad';
import { profileReducer, ProfileCard, fetchProfileData } from 'entities/Profile';
import { memo, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

interface ProfilePageProps {
    className?: string;
}

const initialReducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const dispatch = useAppDispatch();
    
    useDynamicModuleLoad(initialReducers, true);
    
    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <div className={classNames('', {}, [className])}>
            <ProfileCard />
        </div>
    );
});

export default ProfilePage;
