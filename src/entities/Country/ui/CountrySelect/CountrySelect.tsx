import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SelectOption } from '@/shared/ui/Select/Select';

import { Listbox } from '@/shared/ui/Popup';
import { Country } from '../../model/consts/consts';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    readonly?: boolean;
    onChange: (value?: Country) => void;
}

const options: SelectOption<Country>[] = [
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
];

export const CountrySelect = (props: CountrySelectProps) => {
    const { t } = useTranslation('profile');
    const { className, value, readonly, onChange } = props;

    return (
        <Listbox
            className={classNames('', {}, [className])}
            label={t('Страна')}
            value={value}
            items={options}
            readonly={readonly}
            onChange={onChange}
        />
    );
};
