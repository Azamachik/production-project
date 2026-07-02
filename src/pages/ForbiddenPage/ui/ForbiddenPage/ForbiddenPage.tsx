import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ForbiddenPage.module.scss';

interface ForbiddenPageProps {
    className?: string;
}

const ForbiddenPage = memo((props: ForbiddenPageProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.ForbiddenPage, {}, [className])}>
            <h1>403</h1>
            <h2>В доступе отказано</h2>
            <p>У Вас нет прав</p>
        </div>
    );
});

export default ForbiddenPage;
