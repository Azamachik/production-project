import { memo } from 'react';

import { ArticleView } from '@/entities/Article';
import GridIcon from '@/shared/assets/icons/grid.svg';
import ListIcon from '@/shared/assets/icons/list.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';

import cls from './ToggleArticleView.module.scss';

interface ToggleArticleViewProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (value: ArticleView) => void;
}

const viewTypes = [
    {
        icon: <GridIcon />,
        view: ArticleView.GRID,
    },
    {
        icon: <ListIcon />,
        view: ArticleView.LIST,
    },
];

export const ToggleArticleView = memo((props: ToggleArticleViewProps) => {
    const { className, view, onViewClick } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames('', {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    key={viewType.view}
                    variant={ButtonTheme.CLEAR}
                    onClick={onClick(viewType.view)}
                    className={classNames(
                        '',
                        { [cls.selected]: viewType.view === view },
                        [],
                    )}
                >
                    {viewType.icon}
                </Button>
            ))}
        </div>
    );
});

ToggleArticleView.displayName = 'ToggleArticleView';
