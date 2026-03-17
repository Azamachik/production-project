import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = useCallback(async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }, [i18n]);

    return (
        <div className={classNames('', {}, [className])}>
            <Button
                onClick={toggle}
                variant={ButtonTheme.CLEAR}
                size={ButtonSize.M}
            >
                {short ? t('Короткий язык') : t('Язык')}
            </Button>
        </div>
    );
});

LangSwitcher.displayName = 'LangSwitcher';
