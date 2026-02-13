import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { counterActions } from '../model/slices/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export function Counter() {
    const count = useSelector(getCounterValue);
    const dispatch = useDispatch();
    
    const increment = () => {
        dispatch(counterActions.increment());
    };
    
    const decrement = () => {
        dispatch(counterActions.decrement());
    };
    
    const { t } = useTranslation();
    
    return (
        <div>
            <h1>
                {t(`value = ${count}`)}
            </h1>
            <Button
                onClick={increment}
            >
                {t('Increment')}
            </Button>
            <Button
                onClick={decrement}
            >
                {t('Decrement')}
            </Button>
        </div>
    );
}
