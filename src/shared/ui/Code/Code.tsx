import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Code.module.scss';
import { Button, ButtonTheme } from '../Button/Button';
import CopyIcon from '../../assets/icons/copy.svg';

interface CodeProps {
    className?: string;
    code: string; 
}

export const Code = memo(({ className, code }: CodeProps) => {
    const onCopy = () => {
        navigator.clipboard.writeText(code);
    };

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button 
                className={cls.copyBtn}
                variant={ButtonTheme.CLEAR}
                onClick={onCopy}
            >
                <CopyIcon className={cls.icon} />
            </Button>
            <code>
                {code}
            </code>
        </pre>
    );
});

Code.displayName = 'Code';
