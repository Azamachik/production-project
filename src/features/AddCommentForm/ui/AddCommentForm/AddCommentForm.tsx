import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    ReducersList,
    useDynamicModuleLoad,
} from '@/shared/lib/hooks/useDynamicModuleLoad/useDynamicModuleLoad';
import { Button } from '@/shared/ui/Button/Button';
import { CommentForm } from '@/entities/Comment';
import {
    addCommentFormActions,
    addCommentFormReducer,
} from '../../model/slices/addCommentFormSlice';
import { getArticlesCommentFormText } from '../../model/selectors/getArticlesComment';
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
                <CommentForm
                    text={text}
                    onChange={onChange}
                    onCancel={onCancel}
                    onSend={handleSend}
                />
            )}
        </div>
    );
});

AddCommentForm.displayName = 'AddCommentForm';

export default AddCommentForm;
