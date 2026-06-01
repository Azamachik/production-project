import { EditableProfileCard } from 'features/EditableProfileCard';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'shared/ui/Page/Page';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => (
    <Page className={classNames('', {}, [className])}>
        <EditableProfileCard />
    </Page>
));

export default ProfilePage;
