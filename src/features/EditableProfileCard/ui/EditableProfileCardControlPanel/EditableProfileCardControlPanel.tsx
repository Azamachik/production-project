import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { profileActions } from 'features/EditableProfileCard';
import { updateProfileData } from 'features/EditableProfileCard/model/services/updateProfileData/updateProfileData';
import cls from './EditableProfileCardControlPanel.module.scss';

interface EditableProfileCardControlPanelProps {
    className?: string;
    readonly?: boolean;
    isLoading?: boolean;
    error?: string;
}

export const EditableProfileCardControlPanel = (props: EditableProfileCardControlPanelProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const {
        className,
        readonly,
        isLoading,
        error,
    } = props;
    
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
    
    return (
        <div className={classNames(cls.EditableProfileCardControlPanel, {}, [className])}>
            {readonly
                ? (
                    <Button
                        className={cls.editBtn}
                        onClick={onEdit}
                    >
                        {t('Редактировать')}
                    </Button>
                )
                : (
                    <>
                        <Button
                            variant={ButtonTheme.DANGER}
                            onClick={onCancelEdit}
                        >
                            {t('Отменить')}
                        </Button>
                        <Button onClick={onSave}>
                            {t('Сохранить')}
                        </Button>
                    </>
                )}
        </div>
    );
};
