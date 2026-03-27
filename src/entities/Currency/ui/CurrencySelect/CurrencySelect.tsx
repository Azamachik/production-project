import { Select, SelectOption } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Currency } from '../../model/types/Currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    readonly?: boolean;
    onChange?: (value?: Currency) => void;
}

const options: SelectOption<Currency>[] = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.USD, content: Currency.USD },
    { value: Currency.EUR, content: Currency.EUR },
];

export const CurrencySelect = (props: CurrencySelectProps) => {
    const { t } = useTranslation('profile');
    const {
        className,
        value,
        readonly,
        onChange,
    } = props;
    
    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Валюта')}
            value={value}
            options={options}
            readonly={readonly}
            onChange={onChange}
        />
    );
};
