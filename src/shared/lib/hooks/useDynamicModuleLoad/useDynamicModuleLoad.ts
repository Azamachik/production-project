import { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

type ReducersListEntry = [StateSchemaKey, Reducer];

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
}

export const useDynamicModuleLoad = (
    reducers: ReducersList,
    removeAfterUnmount?: boolean,
) => {
    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;
    
    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
            store.reducerManager.add(`${name}`, reducer);
            dispatch({ type: `@INIT ${name} reducer` });
        });
        
        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]: ReducersListEntry) => {
                    store.reducerManager.remove(`${name}`);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};
