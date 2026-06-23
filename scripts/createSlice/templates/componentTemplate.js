const firstCharToUpperCase = require('../firstCharToUpperCase');

module.exports = (componentName) => {
    const component = firstCharToUpperCase(componentName);

    return `import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './${component}.module.scss';

interface ${component}Props {
    className?: string;
}

export const ${component} = memo(
    (props: ${component}Props) => {
        const { className } = props;

        return (
            <div
                className={classNames(cls.${component}, {}, [className])}
            >
            
            </div>
        );
    },
);
`;
};
