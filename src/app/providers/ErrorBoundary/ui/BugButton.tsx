import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';

export const BugButton = () => {
    const { t } = useTranslation();
    const [error, setError] = useState<boolean>(false);

    const onThrow = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button onClick={onThrow}>
            {t('throw error')}
        </Button>
    );
};
