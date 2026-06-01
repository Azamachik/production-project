import { getArticlesCommentFormText } from 'features/AddCommentForm/model/selectors/getArticlesComment';
import {
    addCommentFormActions,
    addCommentFormReducer,
} from 'features/AddCommentForm/model/slices/addCommentFormSlice';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    ReducersList,
    useDynamicModuleLoad,
} from 'shared/lib/hooks/useDynamicModuleLoad/useDynamicModuleLoad';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Textarea } from 'shared/ui/Textarea/Textarea';

import cls from './AddCommentForm.module.scss';

interface AddCommentFormProps {
    className?: string;
    onSend: (value: string) => void;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
    const { className, onSend } = props;
    const { t } = useTranslation('article-details');
    const dispatch = useAppDispatch();
    const text = useSelector(getArticlesCommentFormText);
    const [isCommentFormOpen, setIsCommentFormOpen] = useState(false);
    useDynamicModuleLoad(reducers, true);

    const onChange = useCallback(
        (value: string) => {
            dispatch(addCommentFormActions.setText(value));
        },
        [dispatch],
    );

    const handleSend = useCallback(() => {
        onSend(text);
        onChange('');
        setIsCommentFormOpen(false);
    }, [onSend, onChange, text]);

    const onCancel = useCallback(() => {
        onChange('');
    }, [onChange]);

    const onFormOpen = useCallback(() => {
        setIsCommentFormOpen(true);
    }, []);

    return (
        <div className={classNames(cls.AddCommentForm, {}, [className])}>
            {!isCommentFormOpen ? (
                <Button onClick={onFormOpen}>
                    {t('Добавить комментарий')}
                </Button>
            ) : (
                <>
                    <Textarea
                        className={cls.textarea}
                        placeholder={t('Начните писать комментарий ...')}
                        onChange={onChange}
                        value={text}
                    />
                    <div className={cls.buttonWrapper}>
                        <Button variant={ButtonTheme.DANGER} onClick={onCancel}>
                            {t('Отменить')}
                        </Button>
                        <Button onClick={handleSend}>{t('Отправить')}</Button>
                    </div>
                </>
            )}
        </div>
    );
});

AddCommentForm.displayName = 'AddCommentForm';

export default AddCommentForm;
