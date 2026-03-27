import { Select, SelectOption } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Country } from '../../model/types/Country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    readonly?: boolean;
    onChange?: (value?: Country) => void;
}

const options: SelectOption<Country>[] = [
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
];

export const CountrySelect = (props: CountrySelectProps) => {
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
            label={t('Страна')}
            value={value}
            options={options}
            readonly={readonly}
            onChange={onChange}
        />
    );
};
