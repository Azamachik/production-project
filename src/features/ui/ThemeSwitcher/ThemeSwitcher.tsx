import {classNames} from "shared/lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {useTheme} from "app/providers/ThemeProvider";
import ThemeIcon from "shared/assets/icons/theme.svg";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            <ThemeIcon className={classNames(cls.icon, {}, [className])} />
        </Button>
    );
};