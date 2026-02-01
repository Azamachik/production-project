import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTheme } from 'app/providers/ThemeProvider';
import Moon from 'shared/assets/icons/moon.svg';
import Sun from 'shared/assets/icons/sun.svg';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            variant={ButtonTheme.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === 'dark'
                ? <Moon className={classNames(cls.icon, {}, [className])} />
                : <Sun className={classNames(cls.icon, {}, [className])} />}
        </Button>
    );
};
