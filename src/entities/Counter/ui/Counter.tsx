import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { counterActions } from '../model/slices/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export function Counter() {
    const counterValue = useSelector(getCounterValue);
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
            <h1 data-testid="counter-value">
                {counterValue}
            </h1>
            <Button
                data-testid="counter-increment-btn"
                onClick={increment}
            >
                {t('Increment')}
            </Button>
            <Button
                data-testid="counter-decrement-btn"
                onClick={decrement}
            >
                {t('Decrement')}
            </Button>
        </div>
    );
}
