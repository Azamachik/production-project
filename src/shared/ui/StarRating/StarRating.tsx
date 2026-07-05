import { useState } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import Star from '@/shared/assets/icons/star.svg';
import cls from './StarRating.module.scss';
import { Icon } from '../Icon';

interface StarRatingProps {
    className?: string;
    onSelect?: (starsCount: number) => void;
    size?: number;
    selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = (props: StarRatingProps) => {
    const { className, onSelect, size = 40, selectedStars = 0 } = props;
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));
    const [currentStarsCount, setCurrentStarsCount] = useState(0);

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarsCount(starsCount);
        }
    };

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount);
            setIsSelected(true);
            setCurrentStarsCount(starsCount);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarsCount(0);
        }
    };

    const mods: Mods = {
        [cls.selected]: isSelected,
    };

    return (
        <div className={classNames(cls.StarRating, {}, [className])}>
            {stars.map((star) => (
                <Icon
                    key={star}
                    Svg={Star}
                    className={classNames(cls.star, mods, [
                        currentStarsCount >= star ? cls.hovered : cls.primary,
                    ])}
                    onMouseEnter={onHover(star)}
                    onClick={onClick(star)}
                    onMouseLeave={onLeave}
                    width={size}
                    height={size}
                />
            ))}
        </div>
    );
};
