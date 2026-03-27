import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { EditableProfileCard } from 'features/EditableProfileCard';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => (
    <div className={classNames('', {}, [className])}>
        <EditableProfileCard />
    </div>
));

export default ProfilePage;
