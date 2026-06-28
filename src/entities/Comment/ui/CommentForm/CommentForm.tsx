import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Textarea } from 'shared/ui/Textarea/Textarea';
import { VStack } from 'shared/ui/Stack/VStack/VStack';
import cls from './CommentForm.module.scss';

interface CommentFormProps {
    className?: string;
    onSend: () => void;
    onCancel: () => void;
    onChange: (value: string) => void;
    text: string;
}

export const CommentForm = memo((props: CommentFormProps) => {
    const { className, onSend, onCancel, onChange, text } = props;
    const { t } = useTranslation('article-details');

    return (
        <VStack
            className={classNames(cls.CommentForm, {}, [className])}
            gap="8"
            max
        >
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
                <Button onClick={onSend}>{t('Отправить')}</Button>
            </div>
        </VStack>
    );
});

CommentForm.displayName = 'CommentForm';
