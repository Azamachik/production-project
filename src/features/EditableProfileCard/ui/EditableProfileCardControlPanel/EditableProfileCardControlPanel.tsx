import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from '@/shared/ui/Button';

import cls from './EditableProfileCardControlPanel.module.scss';

import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slices/profileSlices';

interface EditableProfileCardControlPanelProps {
    className?: string;
    readonly?: boolean;
    isLoading?: boolean;
    error?: string;
}

export const EditableProfileCardControlPanel = (
    props: EditableProfileCardControlPanelProps,
) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const { className, readonly, isLoading, error } = props;
    const profile = useSelector(getProfileData);
    const user = useSelector(getUserAuthData);
    const canEdit = user?.id === profile?.id;

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit(true));
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    if (isLoading) {
        return null;
    }

    if (error) {
        return null;
    }

    if (!canEdit) {
        return null;
    }

    return (
        <div
            className={classNames(cls.EditableProfileCardControlPanel, {}, [
                className,
            ])}
        >
            {readonly ? (
                <Button
                    className={cls.editBtn}
                    onClick={onEdit}
                    data-testid="EditableProfileCardControlPanel.Edit"
                >
                    {t('Редактировать')}
                </Button>
            ) : (
                <>
                    <Button
                        variant={ButtonTheme.DANGER}
                        onClick={onCancelEdit}
                        data-testid="EditableProfileCardControlPanel.Cancel"
                    >
                        {t('Отменить')}
                    </Button>
                    <Button
                        onClick={onSave}
                        data-testid="EditableProfileCardControlPanel.Save"
                    >
                        {t('Сохранить')}
                    </Button>
                </>
            )}
        </div>
    );
};
