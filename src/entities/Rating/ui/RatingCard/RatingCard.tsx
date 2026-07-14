import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useDeviceDetect } from '@/shared/lib/hooks/useDeviceDetect/useDeviceDetect';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Drawer } from '@/shared/ui/Drawer';
import { Input } from '@/shared/ui/Input';
import { Modal } from '@/shared/ui/Modal';
import { HStack, VStack } from '@/shared/ui/Stack';
import { StarRating } from '@/shared/ui/StarRating';
import { Text } from '@/shared/ui/Text';

import cls from './RatingCard.module.scss';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hadFeedback?: boolean;
    onCancel?: (rating: number) => void;
    onSubmit?: (rating: number, feedback?: string) => void;
    rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        title = 'Оцените',
        onCancel,
        onSubmit,
        feedbackTitle,
        hadFeedback,
        rate = 0,
    } = props;
    const isTouchDevice = useDeviceDetect();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');
    const { t } = useTranslation();

    const onSelectRating = (selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount);
        if (hadFeedback) {
            setIsModalOpen(true);
        } else {
            onSubmit?.(selectedStarsCount);
        }
    };

    const handleClose = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel]);

    const handleSubmit = useCallback(() => {
        setIsModalOpen(false);
        onSubmit?.(starsCount, feedback);
    }, [onSubmit]);

    const modalContent = (
        <>
            <Text title={feedbackTitle} />
            <Input
                value={feedback}
                onChange={setFeedback}
                placeholder={t('Ваш отзыв')}
            />
        </>
    );

    return (
        <Card className={classNames(cls.Rating, {}, [className])} max>
            <VStack gap="8" max align="center">
                <Text title={rate ? 'Спасибо за оценку' : title} />
                <StarRating
                    onSelect={onSelectRating}
                    size={40}
                    selectedStars={starsCount}
                />
            </VStack>
            {!isTouchDevice ? (
                <Modal isOpen={isModalOpen} lazy>
                    <VStack gap="16">
                        {modalContent}
                        <HStack gap="16" max>
                            <Button
                                onClick={handleClose}
                                variant={ButtonTheme.DANGER}
                            >
                                Закрыть
                            </Button>
                            <Button onClick={handleSubmit}>Отправить</Button>
                        </HStack>
                    </VStack>
                </Modal>
            ) : (
                <Drawer isOpen={isModalOpen} onClose={handleClose}>
                    <VStack gap="16">
                        {modalContent}
                        <HStack gap="16" max>
                            <Button
                                onClick={handleClose}
                                variant={ButtonTheme.DANGER}
                            >
                                Закрыть
                            </Button>
                            <Button onClick={handleSubmit}>Отправить</Button>
                        </HStack>
                    </VStack>
                </Drawer>
            )}
        </Card>
    );
});
