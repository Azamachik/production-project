import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AdminPage.module.scss';

interface AdminPageProps {
    className?: string;
}

const AdminPage = memo((props: AdminPageProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.AdminPage, {}, [className])}>
            <h1>Админ панель</h1>
        </div>
    );
});

export default AdminPage;
